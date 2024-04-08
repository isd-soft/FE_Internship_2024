<script setup>
import GenericLink from '../generics/GenericLink.vue'
import GenericList from '../generics/GenericList.vue'

const linkList = [
    { href: '/', textContent: 'Home', containerClass: 'navigation__link' },
    { href: 'shop', textContent: 'Shop', containerClass: 'navigation__link' },
    { href: 'contact', textContent: 'Contact', containerClass: 'navigation__link' },
    { href: 'cart', textContent: 'Cart', containerClass: 'navigation__link'},
    { href: '#', textContent: 'Profile', containerClass: 'navigation__link'}
]
</script>

<template>
    <nav class="header__navigation navigation">
        <GenericList :items="linkList" customClass="navigation__list" itemClass="text-xl">
            <template v-slot="{ item }">
                <GenericLink v-bind="item" />
            </template>
        </GenericList>
    </nav>
</template>

<style lang="scss" scoped>
nav{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.navigation__list{
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
    justify-content: space-around
}
.navigation__link{
    color:var(--color-black);

}

</style>