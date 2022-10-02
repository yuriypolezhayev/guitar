const store = {
  state() {
    return {
      asideState: true,
    }
  },

  getters: {
    getAsideState(state) {
      return state.asideState;
    }
  },

  mutations: {
    TOGGLE_ASIDE_STATE(state) {
      state.asideState = !state.asideState;
    }
  }
}

export default store;
