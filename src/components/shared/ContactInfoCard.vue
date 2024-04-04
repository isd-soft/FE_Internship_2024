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
    infoName:{
        type: String,
        default: ''
    },
    info:{
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="infoCard">
        <img :src="props.src" :alt="props.alt">
        <div >
            <h1>{{ props.infoName }}</h1>
            <p>{{ props.info }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.infoCard{
    display: flex;
    align-items: start;
    gap: 2rem;
    h1{
        margin:0;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
    }
    p{
        margin: 0;
    }
}
</style>