<template>
  <div class="app-checkbox">
    <div :class="['app-checkbox-item', { selected: isSelected }]">
      <input
          :id="getName"
          :value="modelValue"
          :name="getName"
          :disabled="disabled"
          type="checkbox"
          class="app-checkbox_input"
          @input="selectItem"
          @keyup.enter="selectItem"
      />
      <div class="app-checkbox_box">
        <span v-show="modelValue" class="app-checkbox_box-arrow" />
      </div>
    </div>

    <label
        v-if="item && item.label"
        :for="getName"
        class="app-checkbox_label"
        v-html="item.label"
    />
  </div>
</template>

<script>
export default {
  name: 'AppCheckBox',

  props: {
    modelValue: { required: true },
    item: {
      type: Object,
      required: true,
    },
    itemKey: {
      type: String,
      default: 'id',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isSelected() {
      return this.modelValue.includes(this.item[this.itemKey]);
    },

    getName() {
      return `checkbox_${ (Math.random() + 1)
      .toString(36)
      .substring(7) }`;
    },
  },

  methods: {
    selectItem() {
      this.$emit('update:modelValue', this.item[this.itemKey]);
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #424242;

.app-checkbox {
  display: inline-flex;
  align-items: center;
  position: relative;

  &-item {
    display: flex;
    align-items: end;
    position: relative;
  }

  &_ {
    &input {
      display: flex;
      position: absolute;
      width: 20px;
      height: 20px;
      z-index: 10;
      cursor: pointer;
      appearance: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      opacity: 0;
    }

    &box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border: 1px solid $border-color;
      background-color: $border-color;
      cursor: pointer;

      &-arrow {
        width: 100%;
        height: 100%;
        position: absolute;
        content: '';
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('@/assets/images/components/checkbox.svg');
        background-size: 20px 20px;
        opacity: 0;

        .selected & {
          opacity: 1;
        }
      }
    }

    &label {
      font-size: 16px;
      color: #FFFFFF;
      cursor: pointer;
      margin-left: 5px;
    }
  }

}
</style>
