<script setup>
defineProps({
    icon:{
        type:Object
    },
    infoTitle:{
        type: String,
    },
    infoText:{
        type: Array,
    },
    href:{
        type:String
    },
    styles:{
        type:String
    }
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
                <a :href="href+item"  class="info-card__about text-sm" :style="styles">{{ item }}</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-card{
    display: flex;
    height: min-content;
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
        text-decoration: none;
        color: var(--color-black);
        &:hover{
            color: var(--color-uc-gold);
        }
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