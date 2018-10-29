import Vue from 'vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h =>
    h(
      'div',
      {
        attrs: {
          id: 'app',
        },
      },
      [h('router-view')],
    ),
});
