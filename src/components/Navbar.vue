<script>
import Logo from '@/assets/icons/Furniro_logo.svg'
import Cart from '@/assets/icons/Cart.svg'
import User from '@/assets/icons/User.svg'
import GenericLink from '@/components/generics/GenericLink.vue'

export default {
    components: {
        Logo,
        Cart,
        User, 
        GenericLink
    } 
}
</script>

<template> 
  <nav class="navigation">
      <div class="navigation__logo">
          <generic-link href="#" container-class="navigation__logo-link text-2xl" text-content="Furniro" :text-first="false">
            <Logo />
          </generic-link>
      </div>
      <div class="navigation__links">
            <generic-link href="#" text-content="Home" container-class="navigation__links-item text-sm"></generic-link>
            <generic-link href="#" text-content="Shop" container-class="navigation__links-item text-sm"></generic-link>
            <generic-link href="#" text-content="Contact" container-class="navigation__links-item text-sm"></generic-link>
      </div>
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
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            gap: 5px;
        }
    }

    &__links-item {
        padding: 0 35px;
        font-weight: 500;
    }
}
</style>
