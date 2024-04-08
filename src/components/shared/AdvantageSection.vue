<script setup>
import AdvantageCard from './AdvantageCard.vue';

</script>

<template>
    <div class="advantages">
        <AdvantageCard  name="High Quality" description="Crafted from top materials"/>
        <AdvantageCard  name="Warranty Protection" description="Over 2 years"/>
        <AdvantageCard  name="Free Shipping" description="Order over 150 $"/>
        <AdvantageCard  name="24 / 7 Support" description="Dedicated support"/>
    </div>
</template>

<style lang="scss" scoped>
.advantages{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 53px 100px 53px;

    background-color: var(--color-linen);
    gap: 48px;
}
@media screen and (max-width:768px){
    .advantages{
        gap: 24px;
        padding: 40px;  
    }
}
</style>