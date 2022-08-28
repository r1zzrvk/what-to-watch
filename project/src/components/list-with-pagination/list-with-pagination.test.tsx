import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { ListWithPagination } from './list-with-pagination';

describe('Component: ListWithPagination', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });
  it('should render correctly', () => {
    const films = makeFakeFilms();

    render(
      <Provider store={store}>
        <ListWithPagination films={films} />
      </Provider>

    );
  });
});
