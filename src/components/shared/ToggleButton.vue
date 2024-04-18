<script setup>
import { watch, ref } from 'vue';

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

const active = ref(props.state);

watch(() => props.state, () => {
    active.value = props.state;
})

const { onColor, offColor, toggleColor, outline } = props;

const getButtonState = () => active.value ? '--on' : '--off';
</script>

<template>
    <button :style="{ outline: outline, '--initial-color': onColor, '--final-color': offColor }"
        :class="['toggle-button', 'toggle-button' + getButtonState()]">
        <div :class="['toggle-button__wrapper', 'toggle-button__wrapper' + getButtonState()]">
            <div class="toggle-button__toggler" :style="{ backgroundColor: toggleColor, color: 'white' }"></div>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.toggle-button {
    height: 100%;
    aspect-ratio: 2 / 1;
    border-radius: 25% / 50%;
    overflow: hidden;
    cursor: pointer;

    @keyframes color-off {
        0% {
            background-color: var(--initial-color);
        }

        100% {
            background-color: var(--final-color);
        }
    }

    @keyframes color-on {
        0% {
            background-color: var(--final-color);
        }

        100% {
            background-color: var(--initial-color);
        }
    }

    &--on {
        animation: color-on 0.3s ease-in-out forwards;
    }

    &--off {
        animation: color-off 0.3s ease-in-out forwards;
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