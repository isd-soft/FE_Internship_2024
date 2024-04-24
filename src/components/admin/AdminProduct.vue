<script setup>
import EditIcon from '../../assets/icons/EditIcon.svg'
import TrashIcon from '../../assets/icons/TrashIcon.svg'
import { useModal } from 'vue-final-modal'
import AdminProductModal from './AdminProductModal.vue'
import { useProductStore } from '../../stores/productStore'
import { useUserStore } from '../../stores/userStore'
import { createToast } from '../generics/GenericToast.vue'

const props = defineProps({
  headingFlag: Boolean,
  imageUrl: String,
  id: String,
  description: String,
  name: String,
  price: Number,
  stock: Number,
  discount: Number,
  code: String,
  rating: Number,
  isNew: Boolean,
  createdAt: String,
  updatedAt: String
})

const { open } = useModal({
  component: AdminProductModal,
  attrs: {
    ...props
  }
})

const categoryList = ['Image', 'Code', 'Name', 'Price', 'Stock', 'Discount', 'Actions']

const productStore = useProductStore()
const token = useUserStore().token.key

const handleDeletion = () => {
  confirm('Are you sure you want to delete this product?')
    ? productStore
        .deleteProductFromServer(props.id, token)
        .then((result) =>
          result
            ? createToast('Product deleted successfully!', 'success')
            : createToast('Error while deleting the product: ', 'error')
        )
        .catch((error) => createToast('Error while deleting the product: ' + error, 'error'))
    : null
}
</script>

<template>
  <div v-if="headingFlag" class="admin-product-list__heading admin-product-heading text-sm">
    <div
      v-for="(category, index) in categoryList"
      :key="index"
      class="admin-product-heading__category"
    >
      {{ category }}
    </div>
  </div>

  <div v-else class="admin-product-list__card admin-product-card">
    <img class="admin-product-card__image" :src="imageUrl" :alt="name" />

    <div
      v-for="(category, index) of [code, name, `${price} USD`, stock, discount ? discount : 'N/A']"
      :class="`text-sm admin-product-card__${['code', 'name', 'price', 'stock', 'discount'][index]}`"
      :key="index"
    >
      {{ category }}
    </div>

    <div class="admin-product-card__button-wrapper">
      <button @click="open" class="text-sm admin-product-card__patch-button">
        <EditIcon />
      </button>

      <button @click="handleDeletion" class="text-sm admin-product-card__delete-button">
        <TrashIcon />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-product-card,
.admin-product-heading {
  display: grid;
  grid-template-columns: 7.5rem repeat(3, minmax(0, 1fr)) repeat(3, 10rem);
  align-items: center;
  padding: 0.5rem;
  min-height: 60px;
  height: 6rem;
}

.admin-product-heading__category,
.admin-product-card > * {
  padding: 0 1rem;
}

.admin-product-heading {
  background-color: var(--color-linen);

  &__category {
    &:nth-last-of-type(1) {
      text-align: center;
    }
  }
}

.admin-product-card {
  border: 1px solid var(--color-uc-gold);
  border-radius: 10px;

  &__image {
    padding: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 10px;
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }

  &__patch-button {
    height: 2rem;

    & svg {
      height: 100%;
      fill: var(--color-uc-gold);
    }
  }

  &__delete-button {
    height: 2.5rem;

    & svg {
      height: 100%;
      fill: var(--color-uc-gold);
    }

    &:hover svg {
      fill: var(--color-dark-charcoal);
    }

    &:active svg {
      fill: var(--color-uc-gold);
    }
  }

  &__patch-button {
    height: 2rem;

    & svg {
      height: 100%;
      stroke: var(--color-uc-gold);
    }

    &:hover svg {
      stroke: var(--color-dark-charcoal);
    }

    &:active svg {
      stroke: var(--color-uc-gold);
    }
  }
}

@media only screen and (max-width: 991px) {
  .admin-product-card,
  .admin-product-heading {
    min-height: 50px;
    height: min-content;
    grid-template-columns: 7.5rem repeat(4, minmax(0, 1fr));
  }

  .admin-product-card__code,
  .admin-product-card__stock,
  .admin-product-heading__category:nth-child(2),
  .admin-product-heading__category:nth-child(5) {
    display: none;
  }
}

@media only screen and (max-width: 575px) {
  .admin-product-card,
  .admin-product-heading {
    padding: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
  }

  .admin-product-card {
    &__image {
      border-radius: 10px 0 0 10px;
    }
  }

  .admin-product-card__price,
  .admin-product-card__discount,
  .admin-product-heading__category:nth-child(4),
  .admin-product-heading__category:nth-child(6) {
    display: none;
  }
}
</style>
