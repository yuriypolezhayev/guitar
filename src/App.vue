<template>
  <AppHeader />
  <div class="app-content">
    <AppMain />

    <transition name="fade">
      <AppAside v-show="asideState" />
    </transition>
  </div>
</template>

<script setup>
import AppHeader from '@/components/molecules/headers/AppHeader.vue'
import AppMain from '@/modules/main/Main.vue'
import AppAside from '@/modules/aside/Aside.vue'
</script>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState({
      asideState: (state) => state.asideState
    })
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  display: flex;
  width: 100%;
  height: calc(100% - 75px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
