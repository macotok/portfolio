import Root from '@/components/pages/Root';
import Parent from '@/components/pages/Parent';
import WorkIndex from '@/components/pages/Work/Index';
import WorkDetail from '@/components/pages/Work/Detail';
import Skill from '@/components/pages/Skill';
import Profile from '@/components/pages/Profile';
import About from '@/components/pages/About';

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
          path: ':id',
          component: WorkDetail,
          name: 'workDetail',
        },
      ],
    },
    {
      path: '/skill',
      component: Skill,
      name: 'skill',
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
