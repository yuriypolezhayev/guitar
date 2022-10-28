<template>
  <div class="app-color-picker-wrapper">
    <div
        @click="handlePicker"
        class="color-trigger"
        :style="{ backgroundColor: innerColor }"
    >
      <div class="color-trigger__label">
        <span>{{ innerColor }}</span>
      </div>
    </div>
    <div
        v-if="visiblePicker"
        v-click-outside="onClickOutside"
        class="color-picker-container"
    >
      <ColorPicker :color="innerColor" @colorChange="changeColor" />
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
import { computed, ref } from 'vue';
import { ColorPicker } from 'vue-accessible-color-picker';
// https://www.npmjs.com/package/vue-accessible-color-picker

export default {
  components: {
    ColorPicker,
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  props: {
    modelValue: { required: true },
  },

  setup(props, { emit }) {
    const visiblePicker = ref(false);

    const handlePicker = () => {
      visiblePicker.value = !visiblePicker.value;
    };

    const changeColor = (data) => {
      const { colors: { hex }, } = data;
      innerColor.value = hex;
    };

    const innerColor = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });

    const onClickOutside = (event) => {
      // console.log(event);
      visiblePicker.value = false;
    };

    return {
      innerColor,
      changeColor,
      visiblePicker,
      handlePicker,
      onClickOutside,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-color-picker-wrapper {
  position: relative;
}

.color-trigger {
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  height: 80px;
  position: relative;

  &__label {
    position: absolute;
    right: 1px;
    bottom: 1px;
    color: #fff;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    padding: 6px 10px;
    background: #111111;
    border: 1px solid #ffffff;
    border-radius: 10px;
  }
}

.color-picker-container {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}

:deep() {
  .vacp-color-picker {
    color: #000;
  }

  .vacp-copy-button {
    color: #000;
    background: #ccc;
  }
}
</style>
