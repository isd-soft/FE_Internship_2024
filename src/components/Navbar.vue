<script setup>
import {ref} from 'vue'

import Logo from '@/assets/icons/Furniro_logo.svg'
import Cart from '@/assets/icons/Cart.svg'
import User from '@/assets/icons/User.svg'
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'

const isMenuVisible = ref(true)
const linkList = [
    {
        href: "/",
        textContent: "Home",
        containerClass: "navigation__linkList-item"
    },{
        href: "shop",
        textContent: "Shop",
        containerClass: "navigation__linkList-item"
    },{
        href: "contact",
        textContent: "Contact",
        containerClass: "navigation__linkList-item"
    }
]

const cartUserLinks = [
    {
        href: "#",
        containerClass: "navigation__cart-user-item",
        type: "cart"
    },
    {
        href: "#",
        containerClass: "navigation__cart-user-item",
        type: "user"
    }
]
</script>


<template> 
    <nav class="navigation" v-show = "isMenuVisible">
        <span class="navigation__toggle" @click="isMenuVisible = !isMenuVisible">

        </span>
        <div class="navigation__logo">
            <generic-link href="/" container-class="navigation__logo-link" text-content="Furniro" :text-first="false">
                <Logo />
            </generic-link>
        </div>
        <GenericList :items = "linkList" keyProp = "textContent" customClass = "navigation__linkList">
            <template v-slot = "{item}">
                <GenericLink v-bind = "item"></GenericLink>
            </template>
        </GenericList>

        <GenericList :items="cartUserLinks" customClass="navigation__linkList">
            <template v-slot="{item}">
                <generic-link :href="item.href" :container-class="item.containerClass">
                    <component :is="item.type === 'cart' ? Cart : User" />
                </generic-link>
            </template>
        </GenericList>
    </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.navigation {
    display: flex;
    height: 100px;
    max-width: 1440px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;

    &__toggle{
        display:none;
    }

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

    &__linkList{
        list-style: none;
        display: flex;
        align-items: center;
    }

    &__linkList-item {
        padding: 0 2.5vw;
        font-size: 16px;
        font-weight: 500;
    }
    @media (max-width:768px) {
    flex-direction: column;
    }
}

@media (max-width: 375px) {
    
}
</style>

