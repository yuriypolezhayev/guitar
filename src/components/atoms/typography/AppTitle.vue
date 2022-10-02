<template>
  <component
      :is="tag"
      :class="['app-title', 'app-title_' + tag, getFontSize, getFontWeight, getTitleColor]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
  },
  color: {
    type: String,
    default: 'white',
  },
  size: {
    type: String,
    default: 'sm',
    validator(value) {
      return ['xs', 'sm', 'base', 'xl', 'lg'].includes(value);
    },
  },
  weight: {
    type: String,
    default: '',
  }
})

const getFontSize = computed(() => `app-title-size--${ props.size }`)
const getFontWeight = computed(() => `app-title-weight--${ props.weight }`)
const getTitleColor = computed(() => `app-title-color--${ props.color }`)
</script>
