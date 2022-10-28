<template>
  <div class="items_list">
    <component
      :is="getItemType"
      v-for="(item, index) in options"
      :modelValue="modelValue"
      :key="index"
      :item="item"
      :class="[
        item.class,
        'items_list-item',
        'items_list-item--cols_' + cols,
      ]"
      @update:modelValue="selectItem"
    />
  </div>
</template>

<script>
import AppCheckBox from "@/components/atoms/checkbox/AppCheckBox.vue";
import AppRadioBox from "@/components/atoms/radiobox/AppRadioBox.vue";

const listTypes = {
  check: "AppCheckBox",
  radio: "AppRadioBox",
};

export default {
  name: "AppList",

  components: {
    AppCheckBox,
    AppRadioBox,
  },

  props: {
    modelValue: { required: true },
    type: {
      type: String,
      default: 'checkbox',
      validator(value) {
        return ['check', 'radio'].includes(value);
      },
    },
    options: {
      type: Array,
      default: () => [],
    },
    cols: {
      type: String,
      default: '2',
    },
  },

  computed: {
    isCheckType() {
      return this.getItemType === listTypes.check;
    },

    isRadioType() {
      return this.getItemType === listTypes.radio;
    },

    getItemType() {
      return listTypes[this.type];
    },
  },

  methods: {
    selectItem(value) {
      if (this.isRadioType) this.$emit("update:modelValue", value);
      if (this.isCheckType) this.selectCheckbox(value);
    },

    selectCheckbox(value) {
      let selected = JSON.parse(JSON.stringify(this.modelValue));

      if (selected.includes(value)) {
        let itemIndex = selected.findIndex((item) => item === value);
        selected.splice(itemIndex, 1);
      } else selected.push(value);

      this.$emit('update:modelValue', selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.items_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;

  &-item {
    padding-top: 5px;
    padding-bottom: 5px;

    &--cols_ {
      width: 100%;

      &2 {
        @media (min-width: 768px) {
          width: calc(50% - 15px);
        }
      }

      &3 {
        @media (min-width: 768px) {
          width: calc(100% / 3 - 15px);
        }
      }
    }
  }
}
</style>
