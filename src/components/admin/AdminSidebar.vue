<script setup>
import SidebarLogo from './SidebarLogo.vue'
import SidebarNavigation from './SidebarNavigation.vue'
import LogoutIcon from '../../assets/icons/LogoutIcon.svg'
import GenericLink from '../generics/GenericLink.vue'
</script>

<template>
  <aside class="aside">
    <SidebarLogo />
    <SidebarNavigation />
    <GenericLink href="/home" containerClass="aside__button">
      <div class="aside__logout-svg-wrapper">
        <LogoutIcon />
      </div>
      <span class="aside__button-text text-lg">User</span>
    </GenericLink>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  position: fixed;
  width: 10rem;
  height: 100vh;
  border-right: 1px solid var(--color-uc-gold);
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

  &__logout-svg-wrapper{
    min-width: 2.25rem;
    max-width: 2.25rem;

    .icon{
      width: 100%;
      height: 100%;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    column-gap: 3rem;
    padding: 0 0 0 3.4rem;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: 2.2rem;
  }

  &__button-text {
    display: block;
    color: var(--color-black);
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
