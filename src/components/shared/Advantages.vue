<script setup>
    import AdvantagesCard from './AdvantagesCard.vue';

</script>

<template>
    <div class="advantages">
        <AdvantagesCard src="/src/assets/icons/trophy%201.svg" alt="High Quality" name="High Quality" description="Crafted from top materials"/>
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