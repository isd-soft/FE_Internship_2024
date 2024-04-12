import { ref, toRaw } from 'vue'
import { defineStore } from 'pinia'
import {useProductStore} from './productStore'
import { mapFromJson } from '@/utils/mapFromJson'
import { mapToJson } from '@/utils/mapToJson'

export const useCartStore = defineStore('cart', () => {
    const productMap = ref(new Map())
    const userId = ref("")
    const productStore = useProductStore()

    const addProduct = (product) => {
        if (!(productMap.value instanceof Map)) productMap.value = new Map();
        if (product.quantity == undefined) product.quantity = 1
        // if(!productStore.inStock(product.id)) return false
        productMap.value.set(product.id, product);
        console.log("Product added!")
        console.log(productMap.value)
        saveCart()
        return true
    };
    
    const deleteProduct = (productId) => {
        productMap.value.delete(productId);
        console.log(productMap.value);
        saveCart()
    };
    
    const changeProductQuantity = (productId, newQuantity) => {
        // if (!productStore.isAvailable(productId, newQuantity)) return false
        productMap.value[productId].quantity = newQuantity
        saveCart()
        return true
    };
    
    const getProduct = (productId) => {
        return productMap.value.get(productId);
    };
    
    const saveCart = () => {
        console.log("Saving cart")
        console.log(userId.value)
        const rawMap = toRaw(productMap.value)
        const jsonCart = mapToJson(rawMap)
        localStorage.setItem(userId.value, jsonCart);
    };
    
    //Called during login/register to create cart or retrieve from localStorage
    const getCart = (usrId) => {
        userId.value = usrId;
        const cart = localStorage.getItem(userId.value);
        console.log(cart)
        productMap.value = cart ? mapFromJson(cart) : new Map();
        console.log("Cart Retrieved")
        console.log(productMap.value)
    };

    //Called during logout
    const stashCart = () => {
        saveCart()
        productMap.value = new Map()
        userId.value = undefined
    }

    //Called when user finished shopping and is checking out
    const removeCart = () => {
        localStorage.removeItem(userId.value);
        productMap.value = new Map();
    };


    return {productMap, userId, addProduct, deleteProduct, changeProductQuantity, getProduct, saveCart, getCart, stashCart, removeCart}

})

