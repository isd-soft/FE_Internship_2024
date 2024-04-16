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

const { state, onColor, offColor, toggleColor, outline } = props;

const getButtonState = () => state ? '--on' : '--off';

const initialColor = () => state ? offColor : onColor;

const finalColor = () => state ? onColor : offColor;
</script>

<template>
    <button :style="{ outline: outline, '--initial-color': initialColor(), '--final-color': finalColor() }"
        :class="['toggle-button']">
        <div :class="['toggle-button__wrapper', 'toggle-button__wrapper' + getButtonState()]">
            <div class="toggle-button__toggler" :style="{ backgroundColor: toggleColor }"></div>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.toggle-button {
    height: 100%;
    aspect-ratio: 2 / 1;
    border-radius: 25% / 50%;
    overflow: hidden;
    animation: color-change 0.3s ease-in-out forwards;
    cursor: pointer;

    @keyframes color-change {
        0% {
            background-color: var(--initial-color);
        }

        100% {
            background-color: var(--final-color);
        }
    }

    &__wrapper {
        background-color: transparent;
        padding: 5%;
        width: 250%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @keyframes slide-on {
            0% {
                transform: translate(-40%, 0);
            }

            100% {
                transform: translate(-20%, 0);
            }
        }

        @keyframes slide-off {
            0% {
                transform: translate(-20%, 0);
            }

            100% {
                transform: translate(-40%, 0);
            }
        }

        &--on {
            animation: slide-on 0.3s ease-in-out forwards;
        }

        &--off {
            animation: slide-off 0.3s ease-in-out forwards;
        }
    }

    &__toggler {
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
    }
}
</style>