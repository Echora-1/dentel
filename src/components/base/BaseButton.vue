<template>
  <button
    :class="[
      'common-button',
      {
        'common-button--transparent': transparent,
        'common-button--disabled': disabled,
        'common-button--loading': loading,
        'common-button--black': black,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
    <span class="loader-wrap">
      <span v-if="loading" class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  background: #0c74b5;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  padding: 14px 40px;
  justify-content: center;
  border: 2px solid #0c74b5;
  position: relative;
  text-transform: capitalize;

  @media (max-width: 1000px) {
    font-size: 9px;
    line-height: 11px;
    padding: 7px 19px;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
  }

  &--transparent {
    color: #0c74b5;
    background: transparent;

    .loader {
      color: #6200ee;
    }
  }

  &--black {
    border: 1px solid #52525b;
    color: #52525b;
    padding: 15px 40px;
    background: transparent;

    @media (max-width: 1000px) {
      padding: 8px 19px;
    }

    .loader {
      color: #52525b;
    }
  }

  &--disabled {
    background: rgba(0, 0, 0, 0.3);
    border-color: transparent;
    cursor: not-allowed;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
  }
}

.loader-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 4px;
  height: 25px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #fff;
  box-sizing: border-box;
  animation: animloader 0.45s 0.3s linear infinite alternate;
}

.loader::after,
.loader::before {
  content: "";
  width: 4px;
  height: 25px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
  box-sizing: border-box;
  animation: animloader 0.45s 0.45s linear infinite alternate;
}
.loader::before {
  left: -11px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 28px;
  }
  100% {
    height: 3px;
  }
}
</style>
