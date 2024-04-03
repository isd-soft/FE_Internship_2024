<script setup>
import Logo from '@/assets/icons/Furniro_logo.svg'
import Cart from '@/assets/icons/Cart.svg'
import User from '@/assets/icons/User.svg'
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'

const links = [
    {
        href: "#",
        textContent: "Home",
        containerClass: "navigation__links-item"
    },{
        href: "#",
        textContent: "Shop",
        containerClass: "navigation__links-item"
    },{
        href: "#",
        textContent: "Contact",
        containerClass: "navigation__links-item"
    }
]
</script>


<template> 
  <nav class="navigation">
      <div class="navigation__logo">
          <generic-link href="#" container-class="navigation__logo-link" text-content="Furniro" :text-first="false">
            <Logo />
          </generic-link>
      </div>
    <!-- //   <div class="navigation__links">
    //         <generic-link href="#" text-content="Home" container-class="navigation__links-item"></generic-link>
    //         <generic-link href="#" text-content="Shop" container-class="navigation__links-item"></generic-link>
    //         <generic-link href="#" text-content="Contact" container-class="navigation__links-item"></generic-link>
    //   </div> -->
    <GenericList :items = "links" keyProp = "text-content" customClass = "navigation__links">
        <template v-slot = "{item}">
            <GenericLink v-bind = "item"></GenericLink>
        </template>
    </GenericList>
      <div class="navigation__cart-user">
        <generic-link href="#" container-class="navigation__cart-user-item">
            <Cart />
        </generic-link>
        <generic-link href="#" container-class="navigation__cart-user-item">
            <User />
        </generic-link>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.navigation {
    display: flex;
    height: 100px;
    max-width: 1440px;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--color-black);

        &.navigation__cart-user-item {
            padding: 0 12.5px;
        }
    }

    &__logo {
        a {
            display: inline-flex;
            align-items: center;
            font-size: 34px;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            gap: 5px;
        }
    }

    &__links{
        list-style: none;
        display: inline-flex;
    }

    &__links-item {
        padding: 0 35px;
        font-size: 16px;
        font-weight: 500;
    }
}
</style>
