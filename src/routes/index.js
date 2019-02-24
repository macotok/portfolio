import Root from '../pages/Root';
import AddWork from '../pages/work/Add';
import WorkList from '../pages/work/List';
import WorkDetail from '../pages/work/Detail';
import EditWorkDetail from '../pages/work/Edit';
import AddSkill from '../pages/skill/Add';
import EditSkill from '../pages/skill/Edit';
import SkillList from '../pages/skill/List';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
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
      path: '/work/:id/edit',
      component: EditWorkDetail,
      name: 'editWorkDetail',
    },
    {
      path: '/work/add',
      component: AddWork,
      name: 'addWork',
    },
    {
      path: '/skill/add',
      component: AddSkill,
      name: 'addSkill',
    },
    {
      path: '/skill/:id/edit',
      component: EditSkill,
      name: 'editSkill',
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
      path: '/admin',
      component: Admin,
      name: 'admin',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
};
