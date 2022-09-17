<template>
  <aside>
    <appAccordion title="Show">
      <AppCheckBoxList :options="showOptions" />
    </appAccordion>
    <appAccordion title="Color">
      adad
    </appAccordion>
    <appAccordion title="Pickguard">
      adad
    </appAccordion>
  </aside>
</template>

<script setup>
import { reactive } from 'vue';

import AppAccordion from '@/components/atoms/accordion/AppAccordion.vue';
import AppCheckBoxList from '@/components/molecules/checkbox/AppCheckBoxList.vue';

const showOptions = reactive([
  { id: 1, title: 'Only Guitar' },
  { id: 2, title: 'With stand' },
  { id: 3, title: 'In a case' },
]);
</script>

<style lang="scss" scoped>
aside {
  position: relative;
  overflow-y: scroll;
  width: 100%;
  max-width: 480px;
  background-color: #111111;

  @media (max-width: 992px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
}
</style>
