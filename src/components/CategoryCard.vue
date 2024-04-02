<template>
    <div class="category-section__card category-card">
        <img class="category-card__image" :src="imageSrc" :alt="categoryTitle">
        <h3 class="category-card__title">
            {{ categoryTitle }}
        </h3>
    </div>
</template>

<script setup>
import { defineProps } from '@vue/runtime-core'

const props = defineProps({
    categoryTitle: String,
    imageSrc: String
});
</script>

<style lang="scss" scoped>
.category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    width: calc((100% - 40px) / 3);

    &__image {
        width: 100%;
        height: 480px;
        border-radius: 10px;
        overflow: hidden;
    }

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #333333;
    }
}
</style>
