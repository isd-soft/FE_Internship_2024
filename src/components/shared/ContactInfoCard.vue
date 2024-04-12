<script setup>
defineProps({
    icon:{
        type:Object
    },
    infoTitle:{
        type: String,
        default: ''
    },
    infoText:{
        type: Array,
    },
    })
</script>

<template>
    <div class="info-card">
        <div class="info-card__icon-wrapper">
            <component :is="icon" class="info-card__icon"/>
        </div>
        <div class="info-card__text-wrapper">
            <h3 class="info-card__title text-lg">{{ infoTitle }}</h3>
            <div class="info-card__about-wrapper text-sm" v-for="(item) in infoText" :key="item.id">
                <p class="info-card__about text-sm">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-card{
    display: flex;
    &__icon-wrapper{
        width: 30px;
        margin-right: 12px;
    }
    &__title{
        margin:0;
        font-weight: 500;
    }
    &__about{
        margin: 0;
        font-weight: 300;
    }
}
@media only screen and (max-width: 768px) {
    .info-card{
        &__title{
            font-size: 4.8rem;
        }
        &__about{
            font-size: 2rem;
        }
    }
}
</style>