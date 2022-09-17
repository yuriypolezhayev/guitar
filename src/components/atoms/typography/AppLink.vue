<template>
  <component
      :is="href ? 'a' : 'span'"
      :href="href"
      :target="target"
      :class="['app-link', getFontSize]"
      @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppLink',

  props: {
    target: {
      type: String,
      default: '_blank',
    },
    href: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['xs', 'sm', 'base', 'lg'].includes(value);
      },
    },
  },

  computed: {
    getFontSize() {
      return `app-link-size--${ this.size }`;
    },
  },
};
</script>


<style lang="scss" scoped>
.app-link {
  display: inline-flex;
  font-family: 'NexaLight', sans-serif;
  color: #FFFFFF;
  cursor: pointer;

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
      font-size: 14px;
    }
  }
}
</style>
