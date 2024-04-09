
<script setup>
const props=defineProps({
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
    <div class="AdvantageCard">
        <component :is="icon"/>
        <div class="AdvantageCard__text">
        <h1 class="AdvantageCard__title text-lg">{{ name }}</h1>
        <p class="AdvantageCard__description text-md">{{ description }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.AdvantageCard{
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