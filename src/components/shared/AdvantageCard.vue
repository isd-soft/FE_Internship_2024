
<script setup>
defineProps({
    icon: {
        type: Object,
        required: true
    },
    name:{
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
})
</script>
<template>
    <div class="advantage-card">
        <component :is="icon"/>
        <div class="advantage-card__text-wrapper">
        <h3 class="advantage-card__title text-lg">{{ name }}</h3>
        <p class="advantage-card__description text-md">{{ description }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.advantage-card{
    display: flex;
    align-items: center;
    gap: .75rem;
    &__title{
        font-weight: 600;
        margin:0;
    }
    &__description{
        font-weight: 500;
        margin: 0;
        color: var(--color-taupe-gray);
    }
}
</style>