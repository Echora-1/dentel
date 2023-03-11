<template>
  <section class="main-screen">
    <div class="main-screen__wrap container">
      <div class="main-screen__left">
        <h1 class="base-title">
          Best <span>dental</span> <br />
          <span>services</span> for patients
        </h1>
        <p class="text">
          We invite you to visit our office to learn about our excellent
          services that can improve your smile.
        </p>
        <div class="main-screen__btns">
          <base-button> Contact Us </base-button>
          <base-button black> Learn More </base-button>
        </div>
      </div>
      <div class="main-screen__right">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../assets/images/main-screen.webp    1x,
              ../../assets/images/main-screen@2x.webp 2x
            "
          />
          <img
            src="../../assets/images/main-screen.png"
            width="766"
            height="666"
            alt=""
            srcset="../../assets/images/main-screen@2x.png 2x"
            class="main-screen__img"
          />
        </picture>
      </div>
    </div>
    <div class="main-screen__footer">
      <div class="container footer">
        <div class="footer__text">
          <p class="footer__title">How to book an appointment?</p>
          <p class="footer__subtitle">Choose the best option for you!</p>
        </div>
        <div class="footer__items">
          <div class="footer__item">
            <icon-phone />
            <p>Contact us via WhatsApp</p>
          </div>
          <div class="footer__item">
            <icon-caledar />
            <p>Schedule on the website</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 24px;

  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-bottom: 8px;
    text-align: center;
  }
}

.text {
  line-height: 26px;
  margin-bottom: 64px;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 13px;
    line-height: 16px;
    max-width: 365px;
    margin-bottom: 28px;
    margin-left: auto;
    margin-right: auto;
  }
}

.main-screen {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__wrap {
    flex-grow: 1;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__left,
  &__right {
    flex: 50%;
    max-width: 50%;
    width: 100%;

    @media (max-width: 1000px) {
      flex: 100%;
      max-width: 100%;
    }
  }

  &__right {
    margin-top: auto;
    justify-self: flex-end;

    @media (max-width: 1000px) {
      display: flex;
      align-items: flex-end;
    }
  }

  &__btns {
    display: flex;
    align-items: center;

    button:first-child {
      margin-right: 24px;
    }

    @media (max-width: 1000px) {
      justify-content: center;

      button:first-child {
        margin-right: 14px;
      }
    }
  }

  &__img {
    margin-bottom: -4px;

    @media (min-width: 1336px) {
      margin-left: -50px;
    }

    @media (max-width: 1335px) {
      max-width: 666px;
      max-height: 666px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 1000px) {
      margin-left: unset;
      margin-bottom: -5px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    background-image: url("@/assets/images/main-screen-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 250px;

    @media (max-width: 1000px) {
      background-position: right;
    }
  }
}

.footer {
  display: flex;
  align-items: center;
  color: #ffffff;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 22px 0 26px;
    text-align: center;
  }

  &__title {
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
    margin: 0 0 16px;

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 29px;
      margin: 0 0 8px;
      max-width: 230px;
    }
  }

  &__subtitle {
    font-size: 24px;
    line-height: 32px;
    margin: 0;

    @media (max-width: 1000px) {
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 26px;
    }
  }

  &__items {
    display: flex;
    margin-left: auto;

    @media (max-width: 1000px) {
      margin: 0 auto;
    }
  }

  &__item {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
      margin-right: 50px;
    }

    @media (max-width: 1000px) {
      padding: 16px 20px;
      max-width: 140px;

      &:first-child {
        margin-right: 23px;
      }
    }

    svg {
      width: 38px;
      height: 38px;
      margin-bottom: 16px;

      @media (max-width: 1000px) {
        width: 27px;
        height: 27px;
      }
    }

    p {
      font-weight: 700;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      color: #52525b;
      max-width: 124px;
      margin: 0;

      @media (max-width: 1000px) {
        font-size: 13px;
        line-height: 16px;
      }
    }
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import IconPhone from "@/components/icon/IconPhone.vue";
import IconCaledar from "@/components/icon/IconCaledar.vue";
</script>
