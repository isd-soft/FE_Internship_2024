<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { ref } from 'vue';
const linkList = [
  {
    href: '/',
    textContent: 'Home',
    containerClass: 'footer__link text-sm '
  },
  {
    href: '/shop',
    textContent: 'Shop',
    containerClass: 'footer__link text-sm '
  },
  {
    href: '/contact',
    textContent: 'Contact',
    containerClass: 'footer__link text-sm '
  }
]
const helpLinkList = [
  {
    href: '#',
    textContent: 'Payment Options',
    containerClass: 'footer__link text-sm '
  },
  {
    href: '#',
    textContent: 'Returns',
    containerClass: 'footer__link text-sm '
  },
  {
    href: '#',
    textContent: 'Privacy Policies',
    containerClass: 'footer__link text-sm '
  }
]

const route=useRoute();
const itsHome=ref(false)
if(route.path == '/'){
    itsHome.value=true
}
onBeforeRouteUpdate((to)=>{
  if(to.name=="home"){
    itsHome.value=true
  }
  else{
    itsHome.value=false
  }
})

</script>

<template>
  <footer class="footer section" :class="{active:itsHome}">
    <div class="footer__container container">
      <div class="footer__top-line">
        <div class="footer__adress-wrapper">
          <h3 class="footer__adress-title text-lg">Furniro.</h3>

          <address class="footer__adress text-sm">
            400 University Drive Suite 200 Coral<br /> Gables,<br />FL 33134 USA
          </address>
        </div>

        <nav class="footer__navigation">
          <h3 class="footer__list-title text-sm">Links</h3>

          <GenericList :items="linkList" customClass="footer__list" itemClass="footer__list-item">
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </nav>

        <nav class="footer__navigation">
          <h3 class="footer__list-title text-sm">Help</h3>

          <GenericList :items="helpLinkList" customClass="footer__list" itemClass="footer__list-item">
            <template v-slot="{ item }">
              <GenericLink v-bind="item" />
            </template>
          </GenericList>
        </nav>

        <div class="footer__news-wrapper">
          <h3 class="footer__list-title text-sm">Newsletter</h3>

          <form class="footer__form text-sm" action="submit">
            <input class="footer__input text-xs" type="text" placeholder="Enter your Email Address" />

            <button class="footer__button text-sm" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div class="footer__bottom-line">
        <span class="footer__copyright text-sm"> 2024 furniro. All rights reserved </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.active{
  border-top: 1px solid var(--color-quick-silver);
}
.footer {
  padding: 3.8rem 10rem;

  &__container {
    display: flex;
    flex-direction: column;
  }
  

  &__top-line {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5rem;
    border-bottom: 1px solid var(--color-quick-silver);
  }

  &__adress-wrapper{
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }

  &__adress-title {
    font-weight: 700;
    color: var(--color-black);
  }

  &__adress{
    color: var(--color-quick-silver);
  }
  
  &__list-title {
    font-weight: 500;
    color: var(--color-quick-silver);
    margin-bottom: 5.5rem;
  }

  &__list{
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  &__link {
    font-weight: 500;
    color: var(--color-black);
  }

  &__news-wrapper{
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  &__form{
    display: flex;
    gap: 1rem;
  }

  &__input{
    border: none; 
    border-bottom: 1px solid var(--color-black); 
    &:focus{
      border-bottom: 1px solid var(--color-black); 
    }
  }

  &__button{
    border: none; 
    border-bottom: 1px solid var(--color-black);
    color: var(--color-black);
    background-color: transparent;
    font-weight: 500;
    cursor: pointer;
  }

  &__bottom-line{
    margin-top: 3.5rem;
  }

  &__copyright {
    color: var(--color-black);
  }
}

@media screen and (max-width: 991px) {
  .footer {
    padding: 20px 40px;

    &__top-line {
      display: grid;
      grid-template-columns: 50% 50%;
      row-gap: 20px;
    }

    &__adress-wrapper {
      grid-column: 1 / span 2;
      display: grid;
      grid-template-columns: inherit;
      justify-content: space-between;
      padding-bottom: 20px;
    }

    &__navigation {
      padding-bottom: 20px;
    }

    &__news-wrapper {
      gap: 0;
    }
    &__list{
    gap: 3.5rem;
    }
    &__list-title {
    margin-bottom: 3.5rem;
    }
  }
}

@media only screen and (max-width: 475px) {
  .footer {
    padding: 20px;
    &__adress-wrapper{
    display: flex;
    row-gap: 25px;
  }
  }
}
</style>