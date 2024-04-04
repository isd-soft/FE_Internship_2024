<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'
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
</script>

<template>
  <footer class="footer">
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
            <input class="footer__input" type="text" placeholder="Enter your Email Address" />

            <button class="footer__button" type="submit">SUBSCRIBE</button>
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
.footer {
  border-top: 1px solid var(--color-quick-silver);
  &__container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 140px);
    max-width: 1440px;
    margin: 0 auto;
  } 
  

  &__top-line {
    width: 100%;
    max-width: 1135px;
    display: flex;
    justify-content: space-between;
    padding: 38px 0 48px 0;
  }
  @media screen and (max-width: 768px)  {
      &__top-line {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px;
      }
    }

  &__adress-wrapper{
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
  @media  screen and (max-width: 768px) {
    &__adress-wrapper{
      row-gap: 25px;
    }
    
  }

  &__adress-title {
    font-weight: 700;
    color: var(--color-black);
  }

  &__adress{
    color: var(--color-quick-silver);
  }

  &__navigation{
    display: flex;
    flex-direction: column;
    gap: 55px;
  }
  @media screen and (max-width: 768px){
    &__navigation{
      gap: 25px
    }
  }
  
  &__list-title {
    font-weight: 500;
    color: var(--color-quick-silver);
  }

  &__list{
    display: flex;
    flex-direction: column;
    gap: 44px;
  }
  @media screen and (max-width: 768px) {
    &__list{
      gap: 22px;
    }
    
  }

  &__link {
    font-weight: 500;
    color: var(--color-black);
  }

  &__news-wrapper{
    display: flex;
    flex-direction: column;
    gap: 51px;
  }
  @media screen and (max-width: 768px) {
    &__news-wrapper{
      gap: 25px;
    }
    
  }

  &__list-title{
    color: var(--color-quick-silver);
  }
  &__form{
    display: flex;
    gap: 11px;
  }
  
  @media screen and (max-width: 768px) {
    &__form{
      flex-direction: column;
    }
    
  }

  &__input{
    border: none; 
    border-bottom: 1px solid var(--color-black); 
    &:focus{
      border-bottom: 1px solid var(--color-black); 
      }
  }
  @media screen and (max-width: 768px) {
    &__input{
      width: 210px;
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
  @media screen and (max-width: 768px) {
    &__button{
      width: 100px;
    }
    
  }
  &__bottom-line{
    padding: 35px 0 38px 0;
    border-top: 1px solid var(--color-quick-silver);
  }

  &__copyright {
    color: var(--color-black);
  }
  
}
</style>