<template>
  <component
      :is="tag"
      :class="['app-title', 'app-title_' + tag, getFontSize]"
      @click="$emit('click')"
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
  size: {
    type: String,
    default: 'sm',
    validator(value) {
      return ['xs', 'sm', 'base', 'lg'].includes(value);
    },
  },
})

const getFontSize = computed(() => `app-title-size--${ props.size }`)
</script>

<style lang="scss" scoped>
.app-title {
  display: inline-flex;
  font-family: 'NexaLight', sans-serif;
  color: #FFFFFF;

  &-size {
    &--xs {
      font-size: 14px;
    }

    &--sm {
      font-size: 16px;
      line-height: 19px;
    }

    &--base {
      font-size: 14px;
    }

    &--lg {
      font-size: 22px;
      line-height: 26px;
    }
  }
}
</style>
