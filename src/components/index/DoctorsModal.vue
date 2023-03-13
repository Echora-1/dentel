<template>
  <div class="modal">
    <div class="modal__header">
      <img
        class="modal__img"
        src="../../assets/images/modal/d1.png"
        width="172"
        height="172"
        alt=""
      />
    </div>
    <div class="modal__content">
      <p class="modal__name">Dr. Ann May</p>
      <p class="modal__position">General Orthodontist</p>
      <p class="modal__text">
        Personable dentist with 12 years of experience improving oral health so
        that patients can smile confidently. Skills include ICON Aesthetic
        Infiltration, Restorative Procedures, Crowns, Bridges & Veneers, and
        ICON Aesthetic Infiltration. Personable dentist with 12 years of
        experience improving oral health so that patients can smile confidently.
        Skills include ICON Aesthetic Infiltration, Restorative Procedures,
        Crowns, Bridges & Veneers, and ICON Aesthetic Infiltration.
      </p>
      <div class="modal__slide">
        <img
          src="../../assets/images/modal/s1.png"
          width="124"
          height="142"
          alt=""
        />
        <img
          src="../../assets/images/modal/s2.png"
          width="124"
          height="142"
          alt=""
        />
        <img
          src="../../assets/images/modal/s3.png"
          width="124"
          height="142"
          alt=""
        />
      </div>
      <base-button class="modal__btn">Book Appointment</base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  min-height: 720px;
  height: 100%;
  width: 556px;

  @media (max-width: 767px) {
    width: calc(100vw - 60px);
    min-height: auto;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  &__header {
    background: #deeefb;
    min-height: 122px;
    position: relative;
    margin-bottom: 105px;

    @media (max-width: 767px) {
      min-height: 80px;
      position: relative;
      margin-bottom: 65px;
    }
  }

  &__img {
    border-radius: 50%;
    border: 2px solid #ffffff;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);

    @media (max-width: 767px) {
      width: 86px;
      height: 86px;
    }
  }

  &__content {
    padding: 0 30px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__name {
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;
    margin: 0;
  }

  &__position {
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    color: rgba(38, 38, 38, 0.7);
    display: block;
    padding: 0 75px 18px;
    border-bottom: 1px solid rgba(82, 82, 91, 0.3);
    margin: 0;
    width: fit-content;
  }

  &__text {
    margin: 20px 0 46px;
    font-size: 14px;
    line-height: 18px;
    color: #777777;
  }

  &__slide {
    margin-bottom: 46px;
    img {
      object-fit: contain;

      &:not(:last-child) {
        margin-right: 20px;

        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }

  &__btn {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
</script>
