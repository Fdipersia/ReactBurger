import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

// import React from 'react';
// import { BurgerBuilder } from './BurgerBuilder';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });
  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: 'some-Token',
        userId: 'some-user-id'
      })).toEqual({
        token: 'some-Token',
        userId: 'some-user-id',
        error: null,
        loading: false,
        authRedirectPath: '/'
      });
  });
});
