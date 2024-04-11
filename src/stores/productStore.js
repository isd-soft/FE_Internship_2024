import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getProductListRequest} from '../axios/getProductListRequest'


export const useProductStore = defineStore('product', () => {
  const productMap = ref(new Map())

  const initStore = async () => {
    const result = await getProductListRequest()
    if (productMap.value) productMap.value = new Map()
    if (result) {
      for (let product of result) productMap.value.set(product.id, product)
    }

    console.log(productMap.value)
  }

  // Those functions are to be used by WebSocket
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

    // Those functions are to be used by Admin

    const addProductToServer = async () => {

    }

    const updateProductToServer = async () =>{

    }

    const deleteProductFromServer = async() =>{

    }

  return { productMap, initStore, addproductMap, removeproductMap, updateproductMap, addProductToServer, updateProductToServer, deleteProductFromServer}
})
