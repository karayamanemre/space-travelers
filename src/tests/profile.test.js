import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../Components/Profile';

describe('Profile', () => {
  test('Matches the profile snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});