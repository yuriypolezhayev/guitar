<template>
  <div :id="getName" class="app-accordion">
    <button
        :id="`accordion_heading-${getRandomPrefix}`"
        type="button"
        :aria-expanded="showing"
        :aria-controls="`accordion_body-${getRandomPrefix}`"
        class="app-accordion_title"
        @click="toggle"
    >
      <AppTitle tag="h2" size="lg">
        {{ title }}
      </AppTitle>
      <ArrowIcon :active="showing" />
    </button>

    <div
        v-if="showing"
        :id="`accordion_body-${getRandomPrefix}`"
        :aria-labelledby="`accordion_heading-${getRandomPrefix}`"
        class="app-accordion_body"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import AppTitle from '@/components/atoms/typography/AppTitle.vue';
import ArrowIcon from '@/assets/images/aside/Arrow.vue';
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default: '' },
  name: { type: String, default: '' },
})

const getName = computed(() => {
  if (props.name) return `accordion_${ props.name }`
  return `accordion_${ getRandomPrefix.value }`;
})

const getRandomPrefix = computed(() => (Math.random() + 1).toString(36).substring(7))
</script>

<script>
import showingMixin from '@/mixins/showing.mixin';

export default {
  name: 'AppAccordion',

  mixins: [showingMixin],
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
    padding: 16px 20px;
  }

  &_body {
    background-color: $primary;
    padding: 16px 20px;
  }
}
</style>
