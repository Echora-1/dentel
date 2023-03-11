<template>
  <section class="about">
    <div class="container about__wrap">
      <div class="about__left">
        <h2 class="base-title">About <span>our clinic</span></h2>
        <p class="about__mb-text">
          At our Clinic, your comfort is our highest priority for family dental
          care. You can relax in our dental chair knowing that we offer the
          latest advances in the industry. As specialized practitioners, we are
          comfortable with patients of all ages.
        </p>
        <img
          class="about__img"
          src="../../assets/images/about@2x.png"
          width="558"
          height="480"
          alt="about"
        />
      </div>
      <div class="about__right">
        <p class="text">
          At our Clinic, your comfort is our highest priority for family dental
          care. You can relax in our dental chair knowing that we offer the
          latest advances in the industry. As specialized practitioners, we are
          comfortable with patients of all ages.
        </p>

        <div class="about__what">
          <p class="about__title"><span>?</span> WHAT WE PROVIDE</p>
          <div class="about__items">
            <div class="about__list">
              <p class="about__item" v-for="(item, index) in list" :key="index">
                <icon-sec />
                {{ item }}
              </p>
            </div>
            <div class="about__list">
              <p
                class="about__item"
                v-for="(item, index) in list2"
                :key="index"
              >
                <icon-sec />
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconSec from "@/components/icon/IconSec.vue";
export default {
  components: { IconSec },
  data() {
    return {
      list: [
        "Dental crowns",
        "Emergency dentistry",
        "Root Canals",
        "Dental Fillings",
      ],
      list2: ["Veneers", "Whitening", "Orthodontics", "Dental Implants"],
    };
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  margin-top: 42px;
  margin-bottom: 56px;

  @media (max-width: 1000px) {
    margin-top: 25px;
    margin-bottom: 11px;
  }
}

.text {
  display: inline-block;
  padding-bottom: 40px;
  padding-left: 72px;
  border-bottom: 1px solid rgba(82, 82, 91, 0.25);
  position: relative;

  &:before {
    content: "";
    height: 0;
    width: 558px;
    border-bottom: 1px solid #0c7ac2;
    position: absolute;
    bottom: -1px;
    left: 0;
    transform: translateX(-100%);
  }

  @media (max-width: 1000px) {
    display: none;
  }
}

.about {
  background: #ffffff;

  &__wrap {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__left {
    max-width: 558px;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 2000px;
      height: 100%;
      background: rgba(222, 238, 251, 0.4);
      right: 0;
      top: 0;
      z-index: -1;
    }

    @media (max-width: 1000px) {
      &::before {
        right: unset;
        width: 1000px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &__left,
  &__right {
    padding-top: 72px;

    @media (max-width: 1000px) {
      padding-top: 0;
      max-width: 100%;
      width: 100%;
      position: relative;
    }
  }

  &__right {
    flex-grow: 1;
  }

  &__mb-text {
    display: none;

    @media (max-width: 1000px) {
      display: inline;
      font-size: 13px;
      line-height: 16px;
      max-width: 320px;
      margin: 0 auto 248px;
    }
  }

  &__img {
    margin-top: auto;

    @media (max-width: 1000px) {
      max-width: 440px;
      width: calc(100% + 50px);
      max-height: 220px;
      object-fit: cover;
      object-position: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 0;
      transform: translateX(-50%);
    }
  }

  &__what {
    @media (min-width: 1001px) {
      padding-left: 72px;
    }
  }

  &__items {
    display: flex;
    margin-bottom: 107px;

    @media (max-width: 1000px) {
      margin-bottom: 45px;
    }
  }

  &__list {
    &:first-child {
      margin-right: 85px;
    }

    @media (max-width: 1000px) {
      &:first-child {
        margin-left: auto;
        margin-right: 30px;
      }

      &:last-child {
        margin-right: auto;
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    font-size: 22px;
    line-height: 32px;
    margin: 0 0 24px;

    &:last-child {
      margin: 0;
    }

    svg {
      margin-right: 16px;
    }

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 18px;
      margin: 0 0 13px;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 9px;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #282828;
    display: flex;
    align-items: center;
    margin-top: 97px;
    margin-bottom: 42px;

    span {
      font-size: 48px;
      line-height: 34px;
      color: #0c74b5;
      display: inline-block;
      margin-right: 16px;
    }

    @media (max-width: 1000px) {
      margin-top: 26px;
      margin-bottom: 26px;
      flex-direction: column;
      font-size: 15px;
      line-height: 34px;

      span {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }
}
</style>
