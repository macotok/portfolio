const state = {
  isLoginAdmin: (process.env.SWITCH_DATABASE === 'develop') || false,
};
export default state;
