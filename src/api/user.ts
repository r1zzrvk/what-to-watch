import { TUserData } from '../types/user';

export const getUser = (): TUserData => {
  const user = JSON.parse(localStorage.getItem('user-data') || '{}');
  return user;
};

export const saveUser = (user: TUserData): void => {
  localStorage.setItem('user-data', JSON.stringify(user));
};

export const dropUser = (): void => {
  localStorage.removeItem('user-data');
};
