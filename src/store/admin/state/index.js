const state = {
  isLoginAdmin: (process.env.SWITCH_DATABASE === 'development') || false,
};
export default state;
