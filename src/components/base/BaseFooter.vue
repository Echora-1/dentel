<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="footer__item">
        <img
          src="../../assets/images/logo@2x.png"
          width="153"
          height="63"
          alt="logo"
          class="footer__logo"
        />
        <p class="footer__text">
          NextGen Dental & Orthodontics is your Wheeling dentist. We are
          committed to providing the best dental services for patients
        </p>
      </div>
      <div class="footer__item">
        <p class="footer__title">We are welcoming you</p>
        <p class="footer__subtitle">Want to visit our clinic?</p>
        <p class="footer__text">Saturday - Thrusday</p>
        <p class="footer__text">10 am- 9 pm</p>
      </div>
      <div class="footer__item">
        <p class="footer__title">Important link</p>
        <div class="footer__links">
          <div class="footer__links-list">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
          </div>
          <div class="footer__links-list">
            <a href="">Career</a>
            <a href="">Support</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
      </div>
      <div class="footer__item">
        <p class="footer__title">Say hello to us</p>
        <p class="footer__email">hello@xxxxx.com</p>
        <p class="footer__text">Address</p>
        <p class="footer__text">XXX XXXX</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 380px;
  background: #0c7ac2;
  padding: 60px 0;

  &__wrap {
    display: flex;
    color: #ffffff;
  }

  &__item {
    width: calc(25%);
    &:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    &:first-child {
      padding-right: 60px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      padding-right: 30px;
      padding-left: 30px;
    }

    &:last-child {
      padding-left: 60px;
    }
  }

  &__logo {
    margin-bottom: 27px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    max-width: 280px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 32px;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    margin: 0 0 40px;
    max-width: 222px;
  }

  &__links {
    display: flex;
    margin-top: 40px;
  }

  &__links-list {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-right: 20px;
    }

    a {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
      text-decoration-line: underline;
    }
  }

  &__email {
    margin: 40px 0 32px;
  }
}
</style>
