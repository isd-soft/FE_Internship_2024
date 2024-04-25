import { ref, toRaw, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './productStore'
import { mapFromJson } from '@/utils/mapFromJson'
import { mapToJson } from '@/utils/mapToJson'
import { useUserStore } from './userStore'

export const useCartStore = defineStore('cart', () => {
  const productMap = ref(new Map())
  const userId = ref('')
  const subtotal = computed(() => {
    let sum = 0
    for (let [key, value] of productMap.value) sum += value.price * value.quantity
    return parseFloat(sum.toFixed(2))
  })

  const delivery = computed(() => {
    return subtotal.value > 150? 0 : 150
  })

  const total = computed(() => {
    return parseFloat((subtotal.value + delivery.value).toFixed(2))
  })
  const productStore = useProductStore()
  const userStore = useUserStore()

  const addProduct = (product) => {
    if (!(productMap.value instanceof Map)) productMap.value = new Map()
    if (product.quantity == undefined) product.quantity = 1
    if(!productStore.inStock(product.id)) return false
    productMap.value.set(product.id, product)
    saveCart()
    return true
  }

  const deleteProduct = (productId) => {
    productMap.value.delete(productId)
    saveCart()
  }

  const changeProductQuantity = (productId, newQuantity) => {
    if (!productStore.isAvailable(productId, newQuantity)) return false
    const productToBeChanged = productMap.value.get(productId)
    productToBeChanged.quantity = newQuantity
    saveCart()
    return true
  }

  const getProduct = (productId) => {
    return productMap.value.get(productId)
  }

  const clean = () => {
    for(let [k, v] of productMap.value){
      if (!productStore.productExists(k)){
        productMap.value.delete(k)
      }
    }
  }

  const saveCart = () => {
    const rawMap = toRaw(productMap.value)
    const jsonCart = mapToJson(rawMap)
    localStorage.setItem(userId.value, jsonCart)
  }

  //Called during login/register to create cart or retrieve from localStorage
  const getCart = (usrId) => {
    if(usrId === undefined) {
      usrId = userStore.user.id 
    }

    userId.value = usrId
    const cart = localStorage.getItem(userId.value)
    const userCart = cart ? mapFromJson(cart) : new Map()
    productMap.value = userCart
    console.log(userCart)
  }

  //Called during logout
  const stashCart = () => {
    saveCart()
    productMap.value = new Map()
    userId.value = undefined
  }

  //Called when user finished shopping and is checking out
  const removeCart = () => {
    localStorage.removeItem(userId.value)
    productMap.value = new Map()
  }

  return {
    productMap,
    userId,
    subtotal,
    delivery,
    total,
    addProduct,
    deleteProduct,
    changeProductQuantity,
    getProduct,
    saveCart,
    getCart,
    stashCart,
    removeCart,
    clean
  }
})
