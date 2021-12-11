import hero_1 from './hero-images.svg'

export default {
  title: 'Blocks/Heros/Hero-1',
};

const Template = () => {
  return `<section class="hero-1 container">
    <div class="hero-1__content">
      <h1 class="hero-1__title title title-h1">Want anything to be easy with LaslesVPN.</h1>
      <p class="hero-1__text">
        Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
      </p>
      <img src="${hero_1}"
        alt="Some peoples with phone"
        class="hero-1__img hero-1__img--mobile"
        loading="lazy"
      >
      <a href="#!" class="hero-1__button button-primary button-primary--medium">Get Started</a>
    </div>
    <img src="${hero_1}"
      alt="Some peoples with phone"
      class="hero-1__img hero-1__img--desktop"
      loading="lazy"
    >
  </section>`;
};

export const Hero1 = Template.bind({});
