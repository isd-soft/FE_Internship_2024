<script setup>
import AdvantageCard from './AdvantageCard.vue';
import TrophyIcon from "@/assets/icons/AdvantageTrophyIcon.svg"
import WarrantyIcon from "@/assets/icons/AdvantageWarrantyIcon.svg"
import ShippingIcon from "@/assets/icons/AdvantageShippingIcon.svg"
import SupportIcon from "@/assets/icons/AdvantageSupportIcon.svg"
</script>

<template>
    <section class="advantage-section section">
        <div class="advantage-section__container container">
            <AdvantageCard :icon="TrophyIcon" name="High Quality" description="Crafted from top materials" />
            <AdvantageCard :icon="WarrantyIcon" name="Warranty Protection" description="Over 2 years" />
            <AdvantageCard :icon="ShippingIcon" name="Free Shipping" description="Order over 150 $" />
            <AdvantageCard :icon="SupportIcon" name="24 / 7 Support" description="Dedicated support" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.advantage-section {
    padding: 10rem 0;
    background-color: var(--color-linen);

    &__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4.8rem;
        width: 93%;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 991px) {
    .advantage-section__container {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0;
    }
}

@media only screen and (max-width: 575px) {
    .advantage-section__container {
        grid-template-columns: 1fr;
    }
}
</style>