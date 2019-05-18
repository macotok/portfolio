import Root from '../components/pages/Root';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
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
