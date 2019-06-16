import Root from '@/components/pages/Root';
import Parent from '@/components/pages/Parent';
import WorkIndex from '@/components/pages/Work/Index';
import WorkDetail from '@/components/pages/Work/Detail';
import WorkAddEdit from '@/components/pages/Work/AddEdit';
import SkillIndex from '@/components/pages/Skill/Index';
import SkillAdd from '@/components/pages/Skill/Add';
import Profile from '@/components/pages/Profile';
import About from '@/components/pages/About';
import Admin from '@/components/pages/Admin';

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
          component: WorkIndex,
          name: 'work',
        },
        {
          path: 'add',
          component: WorkAddEdit,
          name: 'workAdd',
        },
        {
          path: ':id',
          component: WorkDetail,
          name: 'workDetail',
        },
        {
          path: ':id/edit',
          component: WorkAddEdit,
          name: 'workEdit',
        },
      ],
    },
    {
      path: '/skill',
      component: Parent,
      children: [
        {
          path: '',
          component: SkillIndex,
          name: 'skill',
        },
        {
          path: 'add',
          component: SkillAdd,
          name: 'skillAdd',
        },
      ],
    },
    {
      path: '/profile',
      component: Profile,
      name: 'profile',
    },
    {
      path: '/about',
      component: About,
      name: 'about',
    },
    {
      path: '/admin',
      component: Admin,
      name: 'admin',
    },
  ],
  // ページを開くとScrollTopが0の位置で表示
  // ブラウザバックをすると元のScrollTopの位置で表示
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
};
