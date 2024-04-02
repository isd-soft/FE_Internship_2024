<script>
import Logo from '@/assets/icons/Furniro_logo.svg'
import Cart from '@/assets/icons/Cart.svg'
import User from '@/assets/icons/User.svg'

export default {
    components: {
        Logo,
        Cart,
        User
    }
}
</script>

<template> 
  <nav class="navigation">
      <div class="navigation__logo">
          <a href="#">
              <Logo />
              <span class = "navigation__logo-naming">Furniro</span>
          </a>
      </div>
      <div class="navigation__links">
          <a href="#" class="navigation__links-item">Home</a>
          <a href="#" class="navigation__links-item">Shop</a>
          <a href="#" class="navigation__links-item">Contact</a>
      </div>
      <div class="navigation__cart-user">
          <a href="#" class="navigation__cart-user-item">
              <Cart />
          </a>
          <a href="#" class="navigation__cart-user-item">
              <User />
          </a>
      </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.navigation {
    display: flex;
    height: 100px;
    max-width: 1440px;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
}

.navigation a {
    text-decoration: none;
    color: #000;
}

.navigation__logo a{
    display: inline-flex;
    align-items: center;
    font-size: 34px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;

}

.navigation__logo-naming{
    padding: 0 0 0 5px;
}

.navigation__links-item {
    padding: 0 35px 0 35px;
    font-size: 16px;
    font-weight: 500;
}

.navigation__cart-user-item {
    padding: 0 12.5px 0 12.5px;
}
</style>