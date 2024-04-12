<script setup>
const props = defineProps({
    state: {
        type: Boolean,
        default: false
    },
    onColor: {
        type: String,
        default: 'var(--color-uc-gold)'
    },
    offColor: {
        type: String,
        default: 'var(--color-white)'
    },
    toggleColor: {
        type: String,
        default: 'black'
    },
    outline: {
        type: String,
        default: '1px solid var(--color-uc-gold)'
    }
})

const { state, onColor, offColor, toggleColor, outline} = props;

const getButtonState = () => state ? '--on' : '--off';

const getBackgroundColor = () => state ? onColor : offColor;
</script>

<template>
    <button class="toggle-button" :style="{outline: outline}">
        <div :class="['toggle-button__wrapper', 'toggle-button__wrapper' + getButtonState()]" :style="{backgroundColor: getBackgroundColor()}">
            <div class="toggle-button__toggler" :style="{backgroundColor: toggleColor}"></div>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.toggle-button {
    height: 100%;
    aspect-ratio: 2 / 1;
    border-radius: 25% / 50%;
    overflow: hidden;

    &__wrapper {
        background-color: transparent;
        padding: 5%;
        width: 250%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
        
        &--on {
            transform: translate(-20%, 0);
        }

        &--off {
            transform: translate(-40%, 0);
        }
    }

    &__toggler {
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
    }
}
</style>