<template>
  <AppList
      type="radio"
      :options="options"
      v-model="inputValue"
      class="ready-colors"
  />
</template>

<script>
import AppList from '@/components/molecules/lists/AppList.vue';

export default {
  name: 'ReadyColors',

  components: {
    AppList,
  },

  props: {
    modelValue: { required: true },
  },

  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },

  data: () => ({
    options: [
      { id: 1, label: '3-Color Sunburst', customBG: 'sunburst' },
      { id: 2, label: 'Roasted Pine', customBG: 'pine' },
      { id: 3, label: 'Mystic Surf Green', customBG: 'green' },
      { id: 4, label: 'Bran Paisley Esquire', customBG: 'esquire' },
    ]
  })
}
</script>
