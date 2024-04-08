import { AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';

describe('UserProcess Slice', () => {
  const fakeUserData = makeFakeUserData();

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(fakeUserData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(fakeUserData, '', {login: 'sdf', password: 'sd3'}));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: fakeUserData,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: makeFakeUserData(),
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
