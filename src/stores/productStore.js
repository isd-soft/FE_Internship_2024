import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getProductListRequest} from '../axios/getProductListRequest'
import {createProductRequest} from '../axios/createProductRequest'


export const useProductStore = defineStore('product', () => {
  const productMap = ref(new Map())

  // Called in App.vue rn to fetch products
  const initStore = async () => {
    const result = await getProductListRequest()
    if (productMap.value) productMap.value = new Map()
    if (result) {
      for (let product of result) productMap.value.set(product.id, product)
    }

    console.log(productMap.value)
  }

  const inStock = (productId) =>{
    return productMap.value[productId].stock > 0
  }

  const isAvailable = (productId, quantity) => {
    return print.value[productId].stock >= quantity
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

    }

    const deleteProductFromServer = async(product, token) =>{

    }

  return { productMap, initStore, inStock, isAvailable, addproductMap, removeproductMap, updateproductMap, addProductToServer, updateProductToServer, deleteProductFromServer}
})
