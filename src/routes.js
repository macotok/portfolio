import Root from './page/Root';
import Add from './page/Add';
import Works from './page/Works';
import Detail from './page/Detail';
import Skill from './page/Skill';
import Profile from './page/Profile';
import Login from './page/Login';
import Editor from './components/Editor';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
    },
    {
      path: '/add',
      component: Add,
      name: 'add',
    },
    {
      path: '/works',
      component: Works,
      name: 'works',
      children: [
        {
          path: ':id',
          component: Editor,
          name: 'edit',
        },
      ],
    },
    {
      path: ':id',
      component: Detail,
      name: 'detail',
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
