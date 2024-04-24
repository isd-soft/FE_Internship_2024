<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'
const linkList = [
  {
    href: '/',
    textContent: 'Home',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  },
  {
    href: '/shop',
    textContent: 'Shop',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  },
  {
    href: '/contact',
    textContent: 'Contact',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  }
]
const helpLinkList = [
  {
    href: '#',
    textContent: 'Payment Options',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  },
  {
    href: '#',
    textContent: 'Returns',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  },
  {
    href: '#',
    textContent: 'Privacy Policies',
    textClass: 'footer__link-content',
    containerClass: 'footer__link '
  }
]

const route = useRoute()
const itsHome = ref(false)
if (route.path == '/') {
  itsHome.value = true
}
onBeforeRouteUpdate((to) => {
  if (to.name == 'home') {
    itsHome.value = true
  } else {
    itsHome.value = false
  }
})
</script>

<template>
  <footer class="footer" :class="{ active: itsHome }">
    <div class="footer__container container">
      <div class="footer__top-line">
        <div class="footer__adress-wrapper">
          <h3 class="footer__adress-title text-lg">Furniro.</h3>

          <address class="footer__adress">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </address>
        </div>

        <nav class="footer__navigation">
          <h3 class="footer__list-title">Links</h3>

          <GenericList :items="linkList" customClass="footer__list" itemClass="footer__list-item">
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </nav>

        <nav class="footer__navigation">
          <h3 class="footer__list-title">Help</h3>

          <GenericList
            :items="helpLinkList"
            customClass="footer__list"
            itemClass="footer__list-item"
          >
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </nav>

        <div class="footer__news-wrapper">
          <h3 class="footer__list-title">Newsletter</h3>

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
.active {
  border-top: 1px solid var(--color-quick-silver);
}
.footer {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__top-line {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    border-bottom: 1px solid var(--color-quick-silver);
  }

  &__adress-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__adress-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-black);
  }

  &__adress {
    color: var(--color-quick-silver);
    font-size: 12px;
    width: 50%;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
  }

  &__list-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-quick-silver);
    display: block;
    width: fit-content;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & :deep(.footer__list-item) {
      display: block;
      width: fit-content;
    }
  }

  &__link {
    font-weight: 500;
    color: var(--color-black);
    font-size: 12px;
  }

  &__news-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__form {
    display: flex;
    gap: 15px;
  }

  &__input {
    font-size: 12px;
    border: none;
    border-bottom: 1px solid var(--color-black);
    &:focus {
      border-bottom: 1px solid var(--color-black);
    }
  }

  &__button {
    font-size: 12px;
    border: none;
    border-bottom: 1px solid var(--color-black);
    color: var(--color-black);
    background-color: transparent;
    font-weight: 500;
    cursor: pointer;
  }

  &__bottom-line {
    padding: 1rem 0;
  }

  &__copyright {
    font-size: 10px;
    color: var(--color-black);
  }
}

@media screen and (max-width: 991px) {
  .footer {
    &__top-line {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 20px;
    }

    &__adress-wrapper {
      grid-column: span 2;
      justify-content: flex-start;
      gap: 10px;
    }

    &__adress {
      width: 35%;
    }

    &__news-wrapper {
      gap: 0;
    }
  }
}

@media only screen and (max-width: 575px) {
  .footer {
    &__adress {
      width: 100%;
    }

    &__copyright {
      padding-bottom: 3rem;
    }
  }
}
</style>
