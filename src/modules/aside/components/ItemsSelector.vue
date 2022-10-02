<template>
  <div class="items-selector">
    <div
        v-for="(item, index) in ITEM_TYPES"
        :key="index"
        :class="['item-type', `item-type--${item[itemKey]}`, {selected: modelValue === item[itemKey]}]"
        @click="$emit('update:modelValue', item[itemKey])"
    >
      <p class="item-type-label" v-html="item.label" />
      <div class="item-type-image">
        <component :is="item.image" :color="modelValue === item[itemKey] ? '#97C7EC' : 'white'" />
      </div>
    </div>
  </div>
</template>

<script>
import HatAsset from '@/assets/images/aside/HatAsset.vue'
import RobeAsset from '@/assets/images/aside/RobeAsset.vue'
import ShoesAsset from '@/assets/images/aside/ShoesAsset.vue'

const ITEM_TYPES = [
  { id: 0, name: 'hat', label: 'Hat', image: 'HatAsset' },
  { id: 1, name: 'robe', label: 'Robe', image: 'RobeAsset' },
  { id: 2, name: 'shoes', label: 'Shoes', image: 'ShoesAsset' },
]

export default {
  name: 'ItemType',

  components: {
    HatAsset,
    RobeAsset,
    ShoesAsset,
  },

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    itemKey: {
      type: String,
      default: 'name',
    }
  },

  data: () => ({
    ITEM_TYPES,
  }),

  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  }
}
</script>

<style lang="scss" scoped>
.items-selector {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000000 0%, #242424 100%);
    z-index: 0;
  }
}

.item-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 10;
  //
  height: 84px;
  min-width: 100px;

  &-label {
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 10px;
    color: #4C4C4C;

    .selected & {
      color: #97C7EC;
    }
  }

  &-image {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
