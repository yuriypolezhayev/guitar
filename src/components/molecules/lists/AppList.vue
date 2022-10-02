<template>
  <div :class="['items_list', wrapperObjectCL]">
    <component
        :is="getItemType"
        v-for="(item, index) in options"
        :modelValue="modelValue"
        :key="index"
        :item="item"
        :class="['items_list-item', item.class, itemObjectCL]"
        @update:modelValue="selectItem"
    />
  </div>
</template>

<script>
import AppCheckBox from '@/components/atoms/checkbox/AppCheckBox.vue';
import AppRadioBox from '@/components/atoms/radiobox/AppRadioBox.vue';

const listTypes = {
  check: 'AppCheckBox',
  radio: 'AppRadioBox'
}

export default {
  name: 'AppList',

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
    inline: {
      type: Boolean,
      default: true
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
      return listTypes[this.type]
    },

    wrapperObjectCL() {
      return {
        'items_list--inline': this.inline
      }
    },

    itemObjectCL() {
      return {
        'items_list-item--horizontal': this.inline,
        'items_list-item--vertical': !this.inline
      }
    }
  },

  methods: {
    selectItem(value) {
      if (this.isRadioType) this.$emit('update:modelValue', value)
      if (this.isCheckType) this.selectCheckbox(value)
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
}
</script>

<style lang="scss" scoped>
.items_list {
  display: flex;
  flex-direction: column;

  &-- {
    &inline {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &-item {
    padding-top: 5px;
    padding-bottom: 5px;

    &--horizontal {
      padding-right: 40px;

      &:last-child {
        padding-right: 0;
      }
    }

    &--vertical {
      padding-top: 15px;

      &:first-child {
        padding-top: 0;
      }
    }
  }
}
</style>
