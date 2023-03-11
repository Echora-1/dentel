<template>
  <button :class="['menu-button', { 'menu-button--open': open }]">
    <span class="menu-button__text">menu</span>
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-button {
  border: none;
  background: transparent;
  width: 50px;
  position: relative;
  cursor: pointer;
  color: currentColor;
  padding: 21px 0 0;
  text-align: center;
  transition: all 0.3s;

  &__text {
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.1em;

    color: rgba(0, 0, 0, 0.4);
  }

  &::before,
  &::after {
    height: 3px;
    border-radius: 6px;
    background: currentColor;
    position: absolute;
    width: 40px;
  }

  &::before,
  &::after {
    content: " ";
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    transition: all 0.3s;
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 13px;
  }

  &--open {
    padding: 30px 0 0;

    &::before,
    &::after {
      top: 15px;
      bottom: unset;
    }

    &::before {
      transform: translateX(-50%) rotate(45deg);
    }

    &::after {
      transform: translateX(-50%) rotate(-45deg);
    }
  }
}
</style>
