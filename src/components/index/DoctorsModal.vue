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
      <p class="modal__name">Dr. Kateryna Yuryk</p>
      <p class="modal__position">General Orthodontist</p>
      <p class="modal__text">
        Kateryna Yuryk, CRDH is a 2007 graduate of the dental hygiene program at
        the University of Illinois Chicago College of Dentistry. Every year
        Kateryna takes continued education classes to implement the newest
        technologies in patient care.
      </p>
      <div class="modal__slide">
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="30"
          :navigation="true"
        >
          <swiper-slide>
            <fullscreen v-model="fullscreen" :teleport="true">
              <img
                @click="toggle"
                src="../../assets/images/diploms/all.png"
                width="124"
                height="142"
                alt=""
                v-if="!fullscreen"
              />
              <div v-else class="fullscreen-wrap" @click="toggle">
                <img
                  src="../../assets/images/diploms/all.png"
                  width="622"
                  height="480"
                  alt=""
                  style="margin: auto"
                />
              </div>
            </fullscreen>
          </swiper-slide>
          <swiper-slide>
            <img
              src="../../assets/images/diploms/kateryna.png"
              width="124"
              height="142"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../../assets/images/diploms/kateryna1.png"
              width="124"
              height="142"
              alt=""
            />
          </swiper-slide>
        </swiper>
      </div>
      <base-button class="modal__btn">Book Appointment</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import { Navigation } from "swiper/core";
export default {
  components: { BaseButton, Swiper, SwiperSlide },

  data() {
    return {
      fullscreen: false,
    };
  },

  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen;
    },
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  min-height: 720px;
  height: 100%;
  width: 700px;

  @media (max-width: 767px) {
    width: calc(100vw - 60px);
    min-height: auto;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  &__header {
    min-height: 122px;
    position: relative;

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
    padding: 105px 30px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
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
    font-size: 16px;
    line-height: 22px;
    color: #777777;
    max-width: 435px;
  }

  &__slide {
    max-width: 80%;
    margin-bottom: 46px;
    img {
      object-fit: contain;

      &:not(:last-child) {
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

.fullscreen-wrap {
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
