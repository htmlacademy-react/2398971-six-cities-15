import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { makeFakeUserData } from '../../utils/mocks';
import { getAuthCheckedStatus, getAuthorizationStatus, getUserData } from './selectors';

describe('UserProcess selectors', () => {

  it('should return authorization status from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: makeFakeUserData(),
    };

    const result = getAuthorizationStatus({ [NameSpace.User]: state });

    expect(result).toBe(authorizationStatus);
  });

  it('should return "true" because auth status is "Auth"', () => {
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: makeFakeUserData(),
    };

    const result = getAuthCheckedStatus({ [NameSpace.User]: state });

    expect(result).toBe(true);
  });

  it('should return "false" because auth status is "Unknown"', () => {
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    const result = getAuthCheckedStatus({ [NameSpace.User]: state });

    expect(result).toBe(false);
  });

  it('return userData "null" if user is auth status is "Unknown"', () => {
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    const result = getUserData({ [NameSpace.User]: state });

    expect(result).toBe(null);
  });

  it('return userData "null" if user is auth status is "NoAuth"', () => {
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };

    const result = getUserData({ [NameSpace.User]: state });

    expect(result).toBe(null);
  });

  it('return userData if user is not authorized auth status is "Auth"', () => {
    const mockUserData = makeFakeUserData();
    const state: UserProcess = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: mockUserData,
    };

    const result = getUserData({ [NameSpace.User]: state });

    expect(result).toBe(mockUserData);
  });
});
