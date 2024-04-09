<script setup>
import AdvantageCard from './AdvantageCard.vue';
import TrophyIcon from "@/assets/icons/AdvantageTrophyIcon.svg"
import WarrantyIcon from "@/assets/icons/AdvantageWarrantyIcon.svg"
import ShippingICon from "@/assets/icons/AdvantageShippingIcon.svg"
import SupportICon from "@/assets/icons/AdvantageSupportIcon.svg"
</script>

<template>
    <div class="advantage-section">
        <AdvantageCard :icon="TrophyIcon" name="High Quality" description="Crafted from top materials"/>
        <AdvantageCard :icon="WarrantyIcon" name="Warranty Protection" description="Over 2 years"/>
        <AdvantageCard :icon="ShippingICon" name="Free Shipping" description="Order over 150 $"/>
        <AdvantageCard :icon="SupportICon" name="24 / 7 Support" description="Dedicated support"/>
    </div>
</template>

<style lang="scss" scoped>
.advantage-section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 53px 100px 53px;
    background-color: var(--color-linen);
    gap: 48px;
}
@media screen and (max-width:768px){
    .advantage-section{
        gap: 50px;
        padding: 40px;  
    }
}
</style>