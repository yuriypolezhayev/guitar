<template>
  <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="['arrow', {'arrow--active': active}]"
  >
    <path
        d="M9.00416 12.1765L1.18216 4.35448C0.911708 4.08406 0.473234 4.08406 0.20278 4.35448C-0.0675938 4.62497 -0.0675937 5.06341 0.20278 5.33386L8.51447 13.6455C8.78492 13.9159 9.2234 13.9159 9.49385 13.6455L17.8055 5.33386C18.0713 5.0587 18.0637 4.62022 17.7885 4.35448C17.5201 4.09526 17.0945 4.09526 16.8262 4.35448L9.00416 12.1765Z"
        fill="white"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',

  props: {
    color: {
      type: String,
      default: 'white'
    },

    active: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  transition: all 0.1s ease-in-out;

  &--active {
    transform: rotate(-90deg);
  }
}
</style>
