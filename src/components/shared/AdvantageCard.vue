
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
    description:{
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="AdvantageCard">
        <component :is="icon"/>
        <div class="AdvantageCard__text">
        <h1 class="AdvantageCard__h1 text-lg">{{ props.name }}</h1>
        <p class="AdvantageCard__p text-md">{{ props.description }}</p>   
        </div>
    </div>
</template>
<style lang="scss" scoped>
.AdvantageCard{
    display: flex;
    align-items: center;
    gap: .75rem;
    &__h1{
        font-weight: 600;
        margin:0;
    }
    &__p{
        font-weight: 500;
        margin: 0;
        color: var(--color-taupe-gray);
    }
}
</style>