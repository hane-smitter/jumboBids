const storeService = {
  get profile() {
    return JSON.parse(localStorage.getItem("profile"));
  },
  /* set c(x) {
    this.a = x / 2;
  }, */
};

export { storeService };
