<template>
    <section class='top-banner'>
        <div class='top-banner__card'>
            <p class='top-banner__card__text-new'>New Arrival</p>
            <p class='top-banner__card__text-discover'>Discover Our New Collection</p>
            <p class='top-banner__card__text-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <RouterLink to='shop'>Buy Now</RouterLink>
        </div>
    </section>

</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang='scss' scoped>

.top-banner{
    background-image: url('public/background_top_banner.png');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    height: clamp(40vh, 96vh, 80vw);
    display: flex;
    align-items: center;
    justify-content: end;
}

.top-banner__card{
    box-sizing: border-box;
    background-color: #FFF3E3;
    // padding: 8.5vh 8.9vh 5vh 5vh ;
    width: clamp(30vw, 91vh, 100vw);
    height: clamp(10vw, 62%, 50vw);
    border-radius: 10px;
    margin-right: 7.95vh;
}

.top-banner__card *{
    max-width: clamp(20vw, 76.8vh, 80vw);
    margin-left: 5.4vh;
}


</style>