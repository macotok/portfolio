import Root from './page/Root';
import AddWork from './page/work/Add';
import WorkList from './page/work/List';
import WorkDetail from './page/work/Detail';
import AddSkill from './page/skill/Add';
import SkillList from './page/skill/List';
import Profile from './page/Profile';
import Login from './page/Login';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
    },
    {
      path: '/add_work',
      component: AddWork,
      name: 'addWork',
    },
    {
      path: '/works',
      component: WorkList,
      name: 'works',
    },
    {
      path: '/work/:id',
      component: WorkDetail,
      name: 'workDetail',
    },
    {
      path: '/add_skill',
      component: AddSkill,
      name: 'addSkill',
    },
    {
      path: '/skills',
      component: SkillList,
      name: 'skills',
    },
    {
      path: '/profile',
      component: Profile,
      name: 'profile',
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
};
