<template>
  <main>
    <div class="content">
      main content
    </div>

    <div class="scroll-marker">
      <ScrollMarker />
      <AppTitle class="scroll-marker__text">
        Click & Hold
        <br>
        to rotate
      </AppTitle>
    </div>

    <div class="share-icon">
      <ShareIcon @click="$emit('click:share')" />
    </div>
  </main>
</template>

<script setup>
import ScrollMarker from '@/assets/images/main/ScrollMarker.vue';
import ShareIcon from '@/assets/images/main/ShareIcon.vue';
import AppTitle from '@/components/atoms/typography/AppTitle.vue';
</script>

<style lang="scss" scoped>
main {
  flex: 1 0 0;
  position: relative;
  width: 100%;

  // DATA CONTAINER - TEMP CLASS LIST
  .content {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

.scroll-marker {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: 50px;
  }

  &__text {
    text-align: center;
    margin-top: 15px;
    @include font-light;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.share-icon {
  position: absolute;
  bottom: 20px;
  right: 25px;
  cursor: pointer;

  svg {
    @media (max-width: 768px) {
      width: 27px;
      height: 31px;
    }
  }
}
</style>
