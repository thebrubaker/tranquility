import env from '~/helpers/load-env';

export default {
  domain: env('AUTH_DOMAIN', 'tranquility.auth0.com'),
  clientID: env('AUTH_CLIENT', 'XUJLmmHr9g2AxoAa9YdbaxkaDf6tdzMu'),
  redirectUri: env('AUTH_REDIRECT', 'http://localhost:3000/authorize'),
  responseType: 'token id_token',
  scope: 'openid',
};
