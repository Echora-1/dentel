<template>
  <section class="container services">
    <div class="services__header">
      <div class="services__line"></div>
      <h2 class="base-title">Our <span>Services</span></h2>
      <div class="services__line"></div>
    </div>
    <div class="services__cards">
      <div class="card card1">
        <img
          src="../../assets/images/services/s1@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">General Dentistry</p>
          <p class="card__subtitle">
            Your treatment experience will be relaxing & smooth.
          </p>
        </div>
      </div>
      <div class="card card2">
        <img
          src="../../assets/images/services/s2@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Invisalign</p>
          <p class="card__subtitle">
            Your treatment experience will be relaxing & smooth.
          </p>
        </div>
      </div>
      <div class="card card3">
        <img
          src="../../assets/images/services/s3@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Braces</p>
          <p class="card__subtitle">
            Your treatment experience will be relaxing & smooth.
          </p>
        </div>
      </div>
      <div class="card card4">
        <img
          src="../../assets/images/services/s4@2x.png"
          width="593"
          height="190"
          alt="services"
          class="card__img"
        />
        <div class="card__text">
          <p class="card__title">Cosmetic Dentistry</p>
          <p class="card__subtitle">
            Your treatment experience will be relaxing & smooth.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.base-title {
  display: block;
  margin: 0 100px;
}

.services {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 55px;
  }

  &__line {
    height: 1px;
    background: rgba(82, 82, 91, 0.45);
    flex-grow: 1;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 55px;
    grid-row-gap: 55px;
  }
}

.card {
  background: #f8fafc;
  border: 1px solid rgba(82, 82, 91, 0.1);
  border-radius: 16px;
  overflow: hidden;
  max-width: 593px;
  width: 100%;

  &__img {
    object-fit: contain;
    object-position: center;
  }

  &__text {
    text-align: center;
    padding: 24px 15px 27px;
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #282828;
  }

  &__subtitle {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    color: #777777;
  }
}

.card1 {
  grid-area: 1 / 1 / 2 / 2;
}
.card2 {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
}
.card3 {
  grid-area: 2 / 1 / 3 / 2;
}
.card4 {
  grid-area: 2 / 2 / 3 / 3;
  justify-self: end;
}
</style>
