<template>
  <div>
    <MainScreen />
    <MainServices class="section-services" />
    <MainAbout />
    <MainDoctors id="doctors" class="section-doctors" />
    <MainReviews />
    <ContactUs id="contact" class="section-contact" />
  </div>
</template>

<script>
import MainScreen from "@/components/index/MainScreen";
import MainServices from "@/components/index/MainServices";
import MainAbout from "@/components/index/MainAbout.vue";
import MainDoctors from "@/components/index/MainDoctors.vue";
import MainReviews from "@/components/index/MainReviews.vue";
import ContactUs from "@/components/index/ContactUs.vue";
export default {
  components: {
    ContactUs,
    MainReviews,
    MainDoctors,
    MainAbout,
    MainServices,
    MainScreen,
  },
};
</script>

<style lang="scss" scoped>
.section-services {
  margin-top: 82px;
  margin-bottom: 62px;

  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

.section-doctors {
  margin-top: 85px;
  margin-bottom: 102px;

  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

.section-contact {
  padding-top: 87px;
  padding-bottom: 107px;

  @media (max-width: 1000px) {
    padding-top: 40px;
    padding-bottom: 58px;
  }
}
</style>
