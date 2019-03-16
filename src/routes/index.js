import Root from '../pages/Root';
import Parent from '../pages/Parent';
import AddWork from '../pages/work/Add';
import WorkList from '../pages/work/List';
import WorkDetail from '../pages/work/Detail';
import EditWorkDetail from '../pages/work/Edit';
import AddSkill from '../pages/skill/Add';
import EditSkill from '../pages/skill/Edit';
import SkillList from '../pages/skill/List';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
    },
    {
      path: '/work',
      component: Parent,
      children: [
        {
          path: '',
          component: WorkList,
          name: 'works',
        },
        {
          path: ':id',
          component: WorkDetail,
          name: 'workDetail',
        },
        {
          path: ':id/edit',
          component: EditWorkDetail,
          name: 'editWorkDetail',
        },
        {
          path: 'add',
          component: AddWork,
          name: 'addWork',
        },
      ],
    },
    {
      path: '/skill',
      component: Parent,
      children: [
        {
          path: '',
          component: SkillList,
          name: 'skills',
        },
        {
          path: 'add',
          component: AddSkill,
          name: 'addSkill',
        },
        {
          path: ':id/edit',
          component: EditSkill,
          name: 'editSkill',
        },
      ],
    },
    {
      path: '/profile',
      component: Profile,
      name: 'profile',
    },
    {
      path: '/admin',
      component: Admin,
      name: 'admin',
    },
    {
      path: '/about',
      component: About,
      name: 'about',
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
};
