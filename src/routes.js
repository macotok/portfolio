import Root from './page/Root';
import Add from './page/Add';
import List from './page/List';
import Detail from './page/Detail';
import Skill from './page/Skill';
import About from './page/About';
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
      path: '/list',
      component: List,
      name: 'list',
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
      path: 'about',
      component: About,
      name: 'about',
    },
    {
      path: 'login',
      component: Login,
      name: 'login',
    },
  ],
};
