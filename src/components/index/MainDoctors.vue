<template>
  <section class="container doctors">
    <div class="doctors__header">
      <h2 class="base-title">Meet Our <span>Doctors</span></h2>
    </div>
    <div class="doctors__list">
      <doctor-card
        class="doctors__item"
        v-for="(item, index) in list"
        :key="index"
        :content="item"
      />
    </div>
  </section>
</template>

<script>
import DoctorCard from "@/components/index/DoctorCard.vue";
export default {
  components: { DoctorCard },

  data() {
    return {
      list: [
        {
          name: "Dr. Ann May",
          position: "General Orthodontist",
          text: "Personable dentist with 12 years of experience improving oral health so that patients can smile confidently. Skills include ICON Aesthetic Infiltration, Restorative Procedures, Crowns, Bridges & Veneers, and ICON Aesthetic Infiltration.",
          img: "d1@2x",
        },
        {
          name: "Dr. Jack Jhones",
          position: "General Orthodontist",
          text: "Personable dentist with 12 years of experience improving oral health so that patients can smile confidently. Skills include ICON Aesthetic Infiltration, Restorative Procedures, Crowns, Bridges & Veneers, and ICON Aesthetic Infiltration.",
          img: "d2@2x",
          reverse: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  @media (min-width: 1001px) {
    line-height: 74px;
  }
}

.doctors {
  &__header {
    text-align: end;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(82, 82, 91, 0.3);

    @media (max-width: 1000px) {
      border-bottom: none;
      text-align: center;
    }
  }

  &__list {
    padding-top: 78px;

    @media (max-width: 1000px) {
      padding-top: 36px;
    }
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>
