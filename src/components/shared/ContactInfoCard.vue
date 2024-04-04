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
    addressName:{
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },

})
</script>

<template>
    <div class="infoCard">
        <img :src="props.src" :alt="props.alt">
        <div >
            <h1>Address</h1>
            <p>236 5th SE Avenue, <br>New York NY10000, United States</p>
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