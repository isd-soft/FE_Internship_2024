<script setup>
import { mozaicImagesUrls } from '../utils/mozaicImagesUrls.js'
import { getUrlFromString } from '../utils/getUrlFromString.js'

const urls = mozaicImagesUrls
</script>

<template>
    <div class="mozaic">
        <div class="mozaic__wrapper">
            <div>
                Share your setup with
                <h1>#FuniroFurniture</h1>
            </div>
            <div v-for="(url, index) in urls" :key="index" :style="{backgroundImage: `url(${getUrlFromString(url.url)})`}"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mozaic {
    height: calc(100vh - 120px);
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    padding: 60px 0;

    &__wrapper {
        flex: 0 0 auto;
        /* width: 1800px; */
        width: 120%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        gap: 16px;

        div {
            background-size: cover;
            background-position: center;

            &:nth-child(1) {
                grid-column: 5 / span 4;
                grid-row: 1 / span 2;
                text-align: center;
                color: var(--color-gray-2);
                font-size: 1.25rem;


                h1 {
                    font-size: 2.5rem;
                    margin: 8px 0 0;
                    color: var(--color-gray-2);
                }
            }

            &:nth-child(2) {
                grid-column: 1 / span 2;
                grid-row: 2 / span 6;
            }

            &:nth-child(3) {
                grid-column: 3 / span 3;
                grid-row: 3 / span 5;
            }

            &:nth-child(4) {
                grid-column: 1 / span 3;
                grid-row: 8 / span 5;
            }

            &:nth-child(5) {
                grid-column: 4 / span 2;
                grid-row: 8 / span 4;
            }

            &:nth-child(6) {
                grid-column: 6 / span 2;
                grid-row: 4 / span 6;
            }

            &:nth-child(7) {
                grid-column: 8 / span 2;
                grid-row: 3 / span 6;
            }

            &:nth-child(8) {
                grid-column: 10 / span 3;
                grid-row: 2 / span 7;
            }

            &:nth-child(9) {
                grid-column: 8 / span 1;
                grid-row: 9 / span 4;
            }

            &:nth-child(10) {
                grid-column: 9 / span 2;
                grid-row: 9 / span 3;
            }
        }
    }
}
</style>