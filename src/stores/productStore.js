import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProductStore = defineStore('product', () => {
  const productList = ref(Map())

  function addProductList(product) {
    if (!this.productList.value) this.productList.value = new Map()
    this.productList.value.set(product.id, product)
}

  function removeProductList(productId) {
    this.productList.value.remove(productId)
}

  function updateProductList(product) {
    if (this.productList.value[product.id]) {
        this.productList.value[product.id] = product
      }  
    }

    function addProductToServer(){

    }

    function updateProductToServer(){

    }

    function deleteProductFromServer(){

    }

  return { productList, addProductList, removeProductList, updateProductList}
})
