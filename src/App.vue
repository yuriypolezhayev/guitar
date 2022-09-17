<template>
  <AppHeader />
  <div class="app-content">
    <AppMain />
    <AppAside />
  </div>
</template>

<script setup>
import AppHeader from '@/components/molecules/headers/AppHeader.vue'
import AppMain from '@/modules/main/Main.vue'
import AppAside from '@/modules/aside/Aside.vue'
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
