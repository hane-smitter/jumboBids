const authService = {
  get getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  },
  /* set c(x) {
    this.a = x / 2;
  }, */
};

export { authService };
