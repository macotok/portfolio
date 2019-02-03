import Root from './page/Root';
import WorkAdd from './page/WorkAdd';
import Works from './page/Works';
import Detail from './page/Detail';
import SkillAdd from './page/SkillAdd';
import Skill from './page/Skill';
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
      path: '/work_add',
      component: WorkAdd,
      name: 'workAdd',
    },
    {
      path: '/works',
      component: Works,
      name: 'works',
    },
    {
      path: '/works/:id',
      component: Detail,
      name: 'detail',
    },
    {
      path: '/skill_add',
      component: SkillAdd,
      name: 'skillAdd',
    },
    {
      path: 'skill',
      component: Skill,
      name: 'skill',
    },
    {
      path: 'profile',
      component: Profile,
      name: 'profile',
    },
    {
      path: 'login',
      component: Login,
      name: 'login',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
};
