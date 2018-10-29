import AuthService from '@/services/AuthService';

let auth0 = {
  authorize: jest.fn(() => {}),
  parseHash: jest.fn(callback => {
    callback(null, {
      accessToken: '123',
      idToken: 'abc',
      expiresIn: 123,
    });
  }),
};

let callbacks = {
  store: jest.fn(authDetails => {}),
  clear: jest.fn(() => {}),
};

let auth = new AuthService(auth0, callbacks);

describe('AuthService', () => {
  it('can login through auth0', () => {
    auth.login();
    expect(auth0.authorize).toBeCalled;
  });
  it('can handle auth0 callback after login and store the session', done => {
    auth.handleAuthentication().then(authDetails => {
      expect(authDetails.accessToken).toBe('123');
      expect(authDetails.idToken).toBe('abc');
      expect(authDetails.expiresIn).toBe(123);
      expect(callbacks.store).toBeCalled;
      expect(callbacks.store.mock.calls[0][0].accessToken).toBe('123');
      expect(callbacks.store.mock.calls[0][0].idToken).toBe('abc');
      expect(callbacks.store.mock.calls[0][0].expiresAt).toBeLessThan(
        123 * 1000 + new Date().getTime() + 20,
      );
      expect(callbacks.store.mock.calls[0][0].expiresAt).toBeGreaterThan(
        123 * 1000 + new Date().getTime() - 20,
      );
      done();
    });
  });
  it('can logout and clear the session', () => {
    auth.logout();
    expect(callbacks.clear).toBeCalled;
  });
});
