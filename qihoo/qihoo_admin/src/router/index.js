import Vue from 'vue';
import Router from 'vue-router';
import QihooAdminGoodsManage from '../pages/QihooAdminGoodsManage.vue';
import QihooAdminMemberManage from '../pages/QihooAdminMemberManage.vue';
import QihooAdminAdminManage from '../pages/QihooAdminAdminManage.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'QihooAdminGoodsManage',
      component: QihooAdminGoodsManage
    },
    {
      path: '/member',
      name: 'QihooAdminMemberManage',
      component: QihooAdminMemberManage
    },
    {
      path: '/admin',
      name: 'QihooAdminAdminManage',
      component: QihooAdminAdminManage
    }
  ]
})
