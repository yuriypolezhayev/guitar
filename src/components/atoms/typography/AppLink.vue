<template>
  <component
      :is="href ? 'a' : 'span'"
      :href="href"
      :target="target"
      :class="['app-link', getFontSize, getFontWeight, getLinkColor]"
      @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  target: {
    type: String,
    default: '_blank',
  },
  href: {
    type: String,
    default: '',
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
  },
})

const getFontSize = computed(() => `app-link-size--${ props.size }`)
const getFontWeight = computed(() => `app-link-weight--${ props.weight }`)
const getLinkColor = computed(() => `app-link-color--${ props.color }`)
</script>

<style lang="scss" scoped>
.app-link {
  cursor: pointer;
  z-index: 10;
}
</style>
