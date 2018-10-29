import auth0 from 'auth0-js';
import AuthService from '@/services/AuthService';
import config from '@/config/auth';
import store from './store';

export default new AuthService(new auth0.WebAuth(config), {
  store(authDetails) {
    store.commit('auth.store', authDetails);
  },
  clear() {
    store.commit('auth.clear');
  },
});
