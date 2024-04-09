import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const productMap = ref(new Map())

    function addProduct(product){
        if(!this.productMap.value) {
            console.log("Map Created")
            this.productMap.value = new Map()
        }
        this.productMap.value.set(product.id, product)
        console.log(this.productMap.value)
    }

    function deleteProduct(productId){
        this.productMap.value.delete(productId)
        console.log(this.productMap.value)
    }

    function incrementProduct(productId){
        this.productMap.value[productId]
    }

    function getProduct(productId){
        return this.productMap.value[productId]
    }

    function saveCart(userId){
        localStorage.setItem(userId, JSON.stringify(this.productMap.value))
    }


    return {productMap, addProduct, deleteProduct, incrementProduct, getProduct, saveCart}

})

//Example usage. Don't foget to bind button to the function:
// import { useCartStore } from '../../stores/cartStore.js'

// //Set up CartStore
// const cartStore = useCartStore()

// const addToCart = (id, imageSrc, title, description, price, quantity) => {
//   cartStore.addProduct({
//     id: id,
//     imageSrc: imageSrc,
//     title: title,
//     description: description,
//     price: price,
//     quantity : quantity
//   })
// }

