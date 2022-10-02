<template>
  <div class="close">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1L11.5 11.5" stroke="#7AB8E7" stroke-linecap="round" />
      <path d="M11.5 1L1 11.5" stroke="#7AB8E7" stroke-linecap="round" />
    </svg>

    <appLink v-if="label" color="primary" class="pl-5">
      {{ label }}
    </appLink>
  </div>
</template>

<script setup>
import appLink from '@/components/atoms/typography/AppLink.vue';

defineProps({
  label: {
    type: String,
    default: 'test',
  }
})
</script>

<style lang="scss" scoped>
.close {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
