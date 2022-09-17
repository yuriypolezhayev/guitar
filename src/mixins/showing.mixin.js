export default {
  data: () => ({
    showing: false
  }),

  methods: {
    updateShowing(value) {
      this.showing = value
    },

    toggle() {
      this.showing = !this.showing
    }
  }
}
