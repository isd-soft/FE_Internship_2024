<script setup>

</script>

<template>
    <div class="infoCard">
        <img src="../assets/icons/Vector (1).svg" alt="icon">
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