<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo">
        <img
          src="../../assets/images/logo@2x.png"
          width="153"
          height="63"
          alt="logo"
        />
      </router-link>

      <nav class="header__nav">
        <a class="header__nav-icon" href=""><IconInst /></a>
        <a class="header__nav-icon" href=""><IconFace /></a>
        <a class="header__phone" href="tel:8479472651">
          <icon-phone />
          <span> (847) 947-2651 </span>
        </a>
        <base-button>Book Appointment</base-button>
      </nav>
    </div>
  </header>
</template>
<script>
import IconPhone from "@/components/icon/IconPhone.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import IconInst from "@/components/icon/IconInst.vue";
import IconFace from "@/components/icon/IconFace.vue";

export default {
  components: { IconFace, IconInst, BaseButton, IconPhone },

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-height: 55px;
  width: 100%;
  padding: 29px 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__nav-icon {
    margin-right: 14px;
    display: flex;
    align-items: center;
    color: #0c74b5;
  }

  &__phone {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 26px;
    margin-right: 48px;

    svg {
      margin-right: 12px;
    }
  }
}

@media (max-width: 1000px) {
  .header {
    &__logo {
      img {
        width: 78px;
        height: 32px;
      }
    }

    &__phone {
      margin-right: 20px;
      span {
        display: none;
      }

      svg {
        width: 18px;
        height: 18px;
        margin-right: 0;
      }
    }

    &__nav-icon {
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
