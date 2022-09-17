<template>
  <span>{{ item }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    required: true
  },
  item: {
    type: Object,
    default: () => {},
  },
})

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    this.$emit('update:modelValue', value);
  },
})
</script>
