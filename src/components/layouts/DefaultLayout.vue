<template>
  <div class="layout">
    <BaseHeader />
    <main class="layout__main">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseFooter from "@/components/base/BaseFooter";
export default {
  components: { BaseFooter, BaseHeader },
};
</script>

<style lang="scss" scoped>
.layout {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &__nav-page {
    position: fixed;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__nav-item {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000000;

    &:not(:last-child) {
      margin-bottom: 9px;
    }

    &--active {
      background: white;
      width: 10px;
      height: 10px;
      border: 1px solid #000000;
      transform: translateX(-2px);
    }
  }
}
</style>
