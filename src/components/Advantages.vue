<script setup>
    import AdvantagesCard from './AdvantagesCard.vue';

</script>

<template>
    <div class="advantages">
        <AdvantagesCard src="/src/assets/icons/trophy%201.svg" alt="High Quality" name="High Quality" description="crafted from top materials"/>
        <AdvantagesCard src="/src/assets/icons/Group.svg" alt="Warranty Protection" name="Warranty Protection" description="Over 2 years"/>
        <AdvantagesCard src="/src/assets/icons/shipping.svg" alt="Free Shipping" name="Free Shipping" description="Order over 150 $"/>
        <AdvantagesCard src="/src/assets/icons/Vector.svg" alt="24 / 7 Support" name="24 / 7 Support" description="Dedicated support"/>
    </div>
</template>

<style lang="scss" scoped>
.advantages{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
    padding-left: 3.35rem;
    padding-right: 3.35rem;
    background-color:var(--color-alabaster);
    gap: 2rem;
}
</style>