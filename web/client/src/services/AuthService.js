export default class AuthService {
  /**
   * The constructor for the class.
   * @param {Object} config
   * @param {Object} callbacks
   */
  constructor(auth0, { store, clear }) {
    this.auth0 = auth0;
    this.storeAuthDetails = store;
    this.clearAuthDetails = clear;
  }

  /**
   * Redirect to the secure auth0 login page.
   */
  login() {
    this.auth0.authorize();
  }

  /**
   * Handle the callback from auth0 by parsing the
   * authentication details out of the URL.
   */
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((error, authDetails) => {
        if (error) {
          return reject(error);
        }

        this.storeAuthDetails({
          accessToken: authDetails.accessToken,
          idToken: authDetails.idToken,
          expiresAt: authDetails.expiresIn * 1000 + new Date().getTime(),
        });

        return resolve(authDetails);
      });
    });
  }

  /**
   * Removes auth details.
   */
  async logout() {
    this.clearAuthDetails({
      accessToken: auth.accessToken,
      idToken: auth.idToken,
      expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),
    });

    return true;
  }
}
