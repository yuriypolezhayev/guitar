<template>
  <div class="tw-relative d-flex">
    <div class="d-flex">
      <input
          :id="getName"
          :value="modelValue"
          :name="getName"
          :checked="isSelected"
          type="radio"
          @input="$emit('update:modelValue', id)"
          @keyup.enter="$emit('update:modelValue', id)"
      />
      <div :class="[$options.baseToggleClassList, isSelected ? 'tw-bg-white tw-border-[5px] tw-border-primary-600' : '']" />
    </div>

    <label v-if="label" :for="getName" v-html="label" />
  </div>
</template>

<script>
export default {
  name: 'AppRadioBox',

  props: {
    modelValue: { required: true },
    id: {
      type: [String, Number],
      required: true,
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
      return this.modelValue === this.id;
    },

    getName() {
      if (this.name) return this.name;
      return `radiobox_${ (Math.random() + 1).toString(36)
      .substring(7) }`;
    },
  },

  baseClassList: [
    'tw-absolute',
    'tw-h-4',
    'tw-w-4',
    'tw-z-10',
    'tw-cursor-pointer',
    'tw-appearance-none',
    'tw-rounded-full',
    // focus
    'focus:tw-outline-none',
    'focus:tw-ring-2',
    'focus:tw-ring-offset-2',
    'focus:tw-ring-indigo-500',
    // disabled
    'disabled:tw-pointer-events-none',
    'disabled:tw-cursor-not-allowed',
  ],

  baseToggleClassList: [
    'tw-flex',
    'tw-items-center',
    'tw-justify-center',
    'tw-w-4',
    'tw-h-4',
    'tw-border',
    'tw-border-gray-300',
    'tw-rounded-full',
    // disabled
    'disabled:tw-opacity-30',
    'disabled:tw-cursor-not-allowed',
  ],
};
</script>
