<script setup>
import SidebarLogo from './SidebarLogo.vue'
import SidebarNavigation from './SidebarNavigation.vue'
import LogoutIcon from '../../assets/icons/LogoutIcon.svg'
</script>

<template>
  <aside class="aside">
    <SidebarLogo />
    <SidebarNavigation />
    <button class="aside__button">
      <LogoutIcon />
      <span class="aside__button-text text-lg">Logout</span>
    </button>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  position: fixed;
  width: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  transition: 0.25s ease-in-out;

  & :deep(.aside__logo-text) {
    display: block;
    opacity: 0;
    transition:
      opacity 0.25s ease-in-out,
      visibility 0s linear;
    visibility: hidden;
  }

  &__logo {
    padding: 1rem 2.5rem 0 2.5rem;
  }

  & :deep(.navigation__link-text) {
    display: block;
    opacity: 0;
    transition:
      opacity 0.25s ease-in-out,
      visibility 0s linear;
    visibility: hidden;
  }

  &__button {
    display: flex;
    align-items: center;
    width: 10rem;
    column-gap: 3rem;
    padding: 0 0 0 3.4rem;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: 2.2rem;

    .logout {
      max-width: 3.2rem;
      min-width: 3.2rem;
      max-width: 3.7rem;
      min-height: 3.7rem;
    }
  }

  &__button-text {
    display: block;
    opacity: 0;
    transition:
      opacity 0.25s ease-in-out,
      visibility 0s linear;
    visibility: hidden;
  }
}

.aside:hover {
  width: 23.5rem;

  & :deep(.aside__button-text) {
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.25s ease-in-out 0.25s,
      visibility 0s linear 0.25s;
  }

  & :deep(.aside__logo-text) {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.25s;
  }

  & :deep(.navigation__link-text) {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.25s;
  }
}
</style>
