<template> 
  <nav class="navigation">
      <div class="navigation__logo">
          <a href="#">
              <img src="@/assets/Frame_168.svg" alt="logo">
          </a>
      </div>
      <div class="navigation__links">
          <a href="#" class="navigation__links-item">Home</a>
          <a href="#" class="navigation__links-item">Shop</a>
          <a href="#" class="navigation__links-item">Contact</a>
      </div>
      <div class="navigation__cart-user">
          <a href="#" class="navigation__cart-user-item">
              <img src="@/assets/cart.svg" alt="">
          </a>
          <a href="#" class="navigation__cart-user-item">
              <img src="@/assets/user.svg" alt="">
          </a>
      </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
}

.navigation__links-item {
    padding: 35px;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
}

.navigation__cart-user-item {
    padding: 0 12.5px 0 12.5px;
}
</style>