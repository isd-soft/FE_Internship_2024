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
    <GenericLink href="/" containerClass="aside__button">
      <div class="aside__logout-svg-wrapper">
        <LogoutIcon />
      </div>
      <span class="aside__button-text text-sm">User</span>
    </GenericLink>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  position: fixed;
  width: 5.95rem;
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
    padding: 1rem 1.25rem 0 1.25rem;
  }

  & :deep(.navigation__link-text) {
    display: block;
    opacity: 0;
    transition:
      opacity 0.25s ease-in-out,
      visibility 0s linear;
    visibility: hidden;
  }

  &__logout-svg-wrapper {
    min-width: 1.9rem;
    max-width: 1.9rem;
  }

  &__button {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    padding: 0 0 0 2rem;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: 1.9rem;
  }

  &__button-text {
    display: block;
    color: var(--color-black);
    opacity: 0;
    font-weight: 400;
    transition:
      opacity 0.25s ease-in-out,
      visibility 0s linear;
    visibility: hidden;

    &:hover {
      color: var(--color-uc-gold);
    }
  }
}

.aside:hover {
  width: 16rem;

  & :deep(.aside__button) {
    transition:
      color 0.25s ease-in-out,
      fill 0.25s ease-in-out;
  }

  & :deep(.aside__button-text) {
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.25s ease-in-out 0.25s,
      visibility 0s linear 0.25s,
      color 0.25s ease-in-out;
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

@media (max-width:575px) {
  .aside{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    border-right: none;
    border-bottom: 1px solid var(--color-uc-gold);

    &__logo{
      padding: 0;
      padding-left: 20px;
    }

    &__button-text{
      display: none;
    }

    & :deep(.navigation__link-text), & :deep(.aside__logo-text){
      display: none;
    }
    
    &:hover {
      width: 100vw; /* Reset width to default state */

      /* Reset child elements' styles to non-hovered state */
      & :deep(.aside__button-text),
      & :deep(.navigation__link-text),
      & :deep(.aside__logo-text) {
        opacity: 0;
        visibility: hidden;
        color: var(--color-black); /* Assuming default color is black */
      }
    }
  }
}
</style>
