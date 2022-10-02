<template>
  <FullScreenIcon v-if="asideState"  @click="clickExpand" />
  <ExpandScreenIcon v-else @click="clickExpand" />
</template>

<script>
import { mapState } from 'vuex';
import ExpandScreenIcon from '@/assets/images/main/ExpandScreenIcon.vue';
import FullScreenIcon from '@/assets/images/main/FullScreenIcon.vue';

export default {
  name: 'FullScreenExpand',

  computed: {
    ...mapState({
      asideState: (state) => state.asideState
    })
  },

  components: {
    ExpandScreenIcon,
    FullScreenIcon
  },

  methods: {
    clickExpand() {
      this.$store.commit('TOGGLE_ASIDE_STATE')
    }
  }
}
</script>
