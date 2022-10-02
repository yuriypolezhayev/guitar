<template>
  <header>
    <AppLogo />
    <AppLink>
      Contact us
    </AppLink>
  </header>
</template>

<script setup>
import AppLogo from '@/assets/images/Logo.vue';
import AppLink from '@/components/atoms/typography/AppLink.vue'
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 75px;
  max-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: black;
}
</style>
