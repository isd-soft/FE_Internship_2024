import { ref } from 'vue'

export const showModal = ref(false)

export const toggleModal = () => {
    showModal.value = !showModal.value
}
