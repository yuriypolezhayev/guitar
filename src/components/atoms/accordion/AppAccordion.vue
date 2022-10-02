<template>
  <div :id="getName" class="app-accordion">
    <button
        :id="`accordion_heading-${getRandomPrefix}`"
        type="button"
        :aria-expanded="getState"
        :aria-controls="`accordion_body-${getRandomPrefix}`"
        class="app-accordion_title content-container"
        @click="toggle"
    >
      <AppTitle tag="h2" size="lg">
        {{ title }}
      </AppTitle>
      <ArrowIcon :active="getState" />
    </button>

    <div
        v-if="getState"
        :id="`accordion_body-${getRandomPrefix}`"
        :aria-labelledby="`accordion_heading-${getRandomPrefix}`"
        :class="['app-accordion_body', {'content-container': !full}]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AppTitle from '@/components/atoms/typography/AppTitle.vue';
import ArrowIcon from '@/assets/images/aside/Arrow.vue';

const props = defineProps({
  title: { type: String, default: '' },
  name: { type: String, default: '' },
  open: { type: Boolean, default: false },
  full: { type: Boolean, default: false },
})

const getName = computed(() => {
  if (props.name) return `accordion_${ props.name }`
  return `accordion_${ getRandomPrefix.value }`;
})

const getRandomPrefix = computed(() => (Math.random() + 1).toString(36).substring(7))
</script>

<script>
import showingMixin from '@/mixins/showing.mixin';
import { computed } from 'vue';

export default {
  name: 'AppAccordion',

  mixins: [showingMixin],

  computed: {
    getState() {
      if (this.open) return true;
      else return this.showing
    }
  }
};
</script>

<style lang="scss" scoped>
.app-accordion {
  display: flex;
  flex-direction: column;

  &_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: $black;
    border: none;
  }

  &_body {
    background-color: $primary;
  }
}
</style>
