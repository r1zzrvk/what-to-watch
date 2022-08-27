import {render, screen} from '@testing-library/react';
import { Tab } from './tab';

describe('Component: Tab', () => {
  it('should render correctly', () => {
    render(
      <Tab tab={'Overview'} activeTab={'Overview'} onClick={jest.fn()}/>
    );

    expect(screen.getByText('Overview')).toBeInTheDocument();
  });
});
