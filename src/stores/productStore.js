import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getProductListRequest} from '../axios/getProductListRequest'
import {createProductRequest} from '../axios/createProductRequest'
import {updateProductRequest} from '../axios/updateProductRequest'
import { deleteProductRequest } from '../axios/deleteProductRequest'


export const useProductStore = defineStore('product', () => {
  const productMap = ref(new Map())
  const loader = ref(false)


  // Called in App.vue rn to fetch products
  const initStore = async () => {
    loader.value = false
    const result = await getProductListRequest()
    if (productMap.value) productMap.value = new Map()
    if (result) {
      for (let product of result) {
        product.price =  normalizePrice(product.price)
        product.discount = parseInt(product.discount)
        productMap.value.set(product.id, product)
      }
      loader.value = true
    }

    //console.log(productMap.value)
  }

  const normalizePrice = (price) =>{
    if (price.includes("$")) price = price.replace("$", "")
    return parseFloat(price)
  }

  const inStock = (productId) =>{
    return productMap.value.get(productId).stock > 0
  }

  const isAvailable = (productId, quantity) => {
    return productMap.value.get(productId).stock >= quantity
  }

  // Those functions are to be used by WebSocket:
  const addproductMap =  (product) => {
    if (!productMap.value) productMap.value = new Map()
    productMap.value.set(product.id, product)
}

  const removeproductMap = (productId) => {
    productMap.value.remove(productId)
}

  const updateproductMap = (product) => {
    if (productMap.value[product.id]) {
        productMap.value[product.id] = product
      }  
    }

    // Those functions are to be used by Admin:

    const addProductToServer = async(product, token) => {
      const result = await createProductRequest(JSON.stringify(product), token)
      return result
    }

    const updateProductToServer = async(product, token) =>{
      const result = await updateProductRequest(JSON.stringify(product), token) //Must contain id of product and values to be changed
      return result
    }

    const deleteProductFromServer = async(productId, token) =>{
      const result = await deleteProductRequest(JSON.stringify([productId]), token)
      return result
    }

  return { productMap, loader, initStore, inStock, isAvailable, addproductMap, removeproductMap, updateproductMap, addProductToServer, updateProductToServer, deleteProductFromServer}
})
