<script setup>
import GenericList from '../generics/GenericList.vue';
import GenericLink from '../generics/GenericLink.vue';

const linkList = [
    { href: '/', textContent: 'Home', containerClass: 'navigation__link' },
    { href: 'shop', textContent: 'Shop', containerClass: 'navigation__link' },
    { href: 'contact', textContent: 'Contact', containerClass: 'navigation__link' },
]
</script>

<template>
    <nav class="header__navigation navigation">
        <GenericList :items="linkList" customClass="navigation__list" itemClass="navigation__list-item text-sm">
            <template v-slot="{ item }">
                <GenericLink v-bind="item" />
            </template>
        </GenericList>
    </nav>
</template>

<style lang="scss" scoped>
.navigation__list {
    display: flex;
    align-items: center;
    column-gap: 76px;
    list-style: none;
}

.navigation__link {
    color: var(--color-black);
}
</style>