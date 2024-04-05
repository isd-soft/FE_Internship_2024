<script setup>
import { computed } from 'vue'
import FilledStarIcon from '../../assets/icons/FilledStarIcon.svg'
import HalfFilledStarIcon from '../../assets/icons/HalfFilledStarIcon.svg'
import EmptyStarIcon from '../../assets/icons/EmptyStarIcon.svg'

const { ratingStars, maxStars } = defineProps({
    ratingStars: {
        type: Number,
        default: 0
    },
    maxStars: {
        type: Number,
        default: 5
    }
})

const starsData = computed(() => {
    const fullStars = Math.floor(ratingStars);
    const halfStar = (ratingStars % 1) !== 0 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStar;

    return { fullStars, halfStar, emptyStars };
})
</script>

<template>
    <div class="star-rating">
        <div v-for="index in starsData.fullStars" :key="'full' + index" alt="Filled Star" class="star-rating__star">
            <FilledStarIcon />
        </div>
        <!-- <img v-for="index in starsData.fullStars" :key="'full' + index" :src="FilledStarIcon" /> -->
        <!-- <img v-if="starsData.halfStar" :src="HalfFilledStarIcon" alt="Half Filled Star" class="star-rating__star"/> -->
        <div v-if="starsData.halfStar" alt="Half Filled Star" class="star-rating__star">
            <HalfFilledStarIcon />
        </div>
        <!-- <img v-for="index in starsData.emptyStars" :key="'empty' + index" :src="EmptyStarIcon" alt="Empty Star" class="star-rating__star"/> -->
        <div v-for="index in starsData.emptyStars" :key="'empty' + index" alt="Empty Star" class="star-rating__star">
            <EmptyStarIcon />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.star-rating{
    display: flex;
    column-gap: 5px;
}
</style>