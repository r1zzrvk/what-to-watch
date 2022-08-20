import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';
import { AuthorizationStatus } from '../../constants/auth';
import { TUserData } from '../../types/user';

type TAppState = {
  authorizationStatus: AuthorizationStatus
  userData: TUserData | null;
}

const initialState: TAppState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: getUser(),
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<TUserData | null>) {
      state.userData = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    }
  },
});

export const { setUserData, setAuthorizationStatus } = appReducer.actions;
