<template>
    <section class="main__section section category-section">
        <div class="category-section__container container">
            <h2 class="category-section__title text-xl">
                Browse the range
            </h2>

            <p class="category-section__paragraph text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div class="category-section__card-wrapper">
                <CategoryCard v-for="(category, index) in categories" :key="index" :categoryTitle="category.title"
                    :imageSrc="category.imageSrc" />
            </div>
        </div>
    </section>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue';

const categories = [
    { title: 'Dining', imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image' },
    { title: 'Living', imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image' },
    { title: 'Bedroom', imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image' }
];
</script>

<style lang="scss" scoped>
.category-section {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1183px;
        margin: 0 auto;
    }

    &__title {
        font-weight: 700;
        line-height: 48px;
        color: var(--color-dark-charcoal);
        margin: 0;
    }

    &__paragraph {
        font-weight: 400;
        line-height: 30px;
        color: var(--color-granite-gray);
        margin-bottom: 62.29px;
    }

    &__card-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}
</style>