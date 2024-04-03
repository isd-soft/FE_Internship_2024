<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'
const linkList = [
  {
    href: '/',
    textContent: 'Home',
    containerClass: 'navigation__links-item text-sm '
  },
  {
    href: '/shop',
    textContent: 'Shop',
    containerClass: 'navigation__links-item text-sm '
  },
  {
    href: '/contact',
    textContent: 'Contact',
    containerClass: 'navigation__links-item text-sm '
  }
]
const helpLinkList = [
  {
    href: '#',
    textContent: 'Payment Options',
    containerClass: 'navigation__links-item text-sm '
  },
  {
    href: '#',
    textContent: 'Returns',
    containerClass: 'navigation__links-item text-sm '
  },
  {
    href: '#',
    textContent: 'Privacy Policies',
    containerClass: 'navigation__links-item text-sm '
  }
]
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top-line">
        <div class="footer__adress-wrapper">
          <h3 class="footer__adress-title text-lg">Furniro.</h3>

          <address class="footer__adress">
            400 University Drive Suite 200 Coral <br />Gables,<br />FL 33134 USA
          </address>
        </div>

        <div class="footer__list-wrapper">
          <h3 class="footer__list-title text-md">Links</h3>

          <GenericList :items="linkList" customClass="footer__list" itemClass="footer__list-item">
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </div>

        <div class="footer__list-wrapper">
          <h3 class="footer__list-title text-md">Help</h3>

          <GenericList :items="helpLinkList" customClass="footer__link-list" itemClass="footer__list-item">
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </div>

        <div class="footer__news-wrapper">
          <h3 class="footer__list-title text-md">Newsletter</h3>

          <form class="footer__form" action="submit">
            <input class="footer__input" type="text" placeholder="Enter your Email Address" />

            <button class="footer__button" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div class="footer__bottom-line">
        <span class="footer__copyright"> 2024 furniro. All rights reserved </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
  }

  &__top-line {
    display: flex; 
  }

  // TODO: finish the style for footer and see which child parts to extract!!! The previous setting was very wrong both in css styling/classes and semantics
}
</style>