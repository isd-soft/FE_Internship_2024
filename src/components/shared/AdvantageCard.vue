
<script setup>
const props=defineProps({
    alt:{
        type: String,
        default: ''  
    },
    src:{
        type: String,
        default: ''
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
    <div class="AdvantagesCard">
        <div class="AdvantagesCard__text">
        <h1 class="text-lg">{{ props.name }}</h1>
        <p class="text-md">{{ props.description }}</p>   
        </div>
    </div>
</template>
<style lang="scss" scoped>
.AdvantagesCard{
    display: flex;
    align-items: center;
    gap: .75rem;
    &__text{
        h1{
            font-weight: 600;
            font-size: 25px;
            margin:0;
        }
        p{
            font-weight: 500;
            margin: 0;
            color: var(--color-taupe-gray);
        }
    }
}
</style>