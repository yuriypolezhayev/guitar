<template>
  <div class="app-accordion_list" v-for="(item, index) in options" :key="index">
    <AppCheckBox :item="item" />
  </div>
</template>

<script setup>
import AppCheckBox from '@/components/atoms/checkbox/AppCheckBox.vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
})
</script>
