<script setup>
import { onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

function createToast(duration, message, position, type) {
  const $toast = useToast()
  let instance = $toast.open({
    message: message,
    duration: duration,
    position: "bottom-right",
    type: type
  })
}

onMounted(() => {
  createToast(props.duration, props.message, props.position, props.type)
})

const props = defineProps({
  duration: {
    type: Number,
    default: 10000
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warning', 'success', 'error'].includes(value)
  }
})
</script>

<style lang="scss">
.v-toast {
  &__item {
    min-height: 80px;
    min-width: 294px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    justify-content: center;

    &--success {
      background-color: var(--color-blue-green);
      color: var(--color-white);
    }

    &--error {
      background-color: var(--color-candy-pink);
      color: var(--color-white);
    }
    &--info {
      background-color: var(--color-old-lace);
      color: var(--color-black);

    }

    &--warning {
      background-color: var(--color-light-silver);
      color: var(--color-black);
    }
  }
}
</style>
