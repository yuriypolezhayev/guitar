<template>
  <div class="app-radiobox">
    <div :class="['app-radiobox-item', { selected: isSelected }]">
      <input
          :id="getName"
          :value="modelValue"
          :name="getName"
          :disabled="disabled"
          :checked="isSelected"
          type="radio"
          class="app-radiobox_input"
          @input="$emit('update:modelValue', item[itemKey])"
          @keyup.enter="$emit('update:modelValue', item[itemKey])"
      />
      <div
          class="app-radiobox_box"
          :class="{custom: isCustomBackground}"
          :style="getCustomBG"
      >
        <span v-show="isSelected" class="app-radiobox_box-item" />
      </div>
    </div>

    <label
        v-if="item && item.label"
        :for="getName"
        class="app-radiobox_label"
        v-html="item.label"
    />
  </div>
</template>

<script>
import SunburstImage from '@/assets/images/aside/checkbox/sunburst.svg';
import PineImage from '@/assets/images/aside/checkbox/pine.svg';
import GreenImage from '@/assets/images/aside/checkbox/green.svg';
import esquireImage from '@/assets/images/aside/checkbox/esquire.svg';

const IMAGES_MAP = {
  sunburst: SunburstImage,
  pine: PineImage,
  green: GreenImage,
  esquire: esquireImage,
}

export default {
  name: 'AppRadioBox',

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
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },

    isSelected() {
      return this.modelValue === this.item[this.itemKey];
    },

    isCustomBackground() {
      return this.item && this.item.customBG;
    },

    getName() {
      if (this.name) return this.name;
      return `radiobox_${ (Math.random() + 1)
      .toString(36)
      .substring(7) }`;
    },

    getCustomBG() {
      return { backgroundImage: 'url(' + IMAGES_MAP[this.item.customBG] + ')' }
    }
  },
};
</script>

<style lang="scss" scoped>
$border-color: #424242;

.app-radiobox {
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
      border-radius: 100%;
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
      border-radius: 100%;
      cursor: pointer;

      &-item {
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        background-color: white;
        border-radius: 100%;

        .selected & {
          opacity: 1;
        }
      }

      &.custom {
        border: none;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        .app-radiobox_box-item {
          opacity: 0;
        }

        .selected & {
          outline: 1px solid white;
          outline-offset: 1px;
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
