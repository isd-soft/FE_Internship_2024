import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const productMap = ref(new Map())
    const userId = ref("")

    const addProduct = (product) => {
        if (!productMap.value) productMap.value = new Map();
        //If quantity of productId === 0 return false
        productMap.value.set(product.id, product);
        saveCart()
        return true
    };
    
    const deleteProduct = (productId) => {
        productMap.value.delete(productId);
        console.log(productMap.value);
        saveCart()
    };
    
    const changeProductQuantity = (productId, newQuantity) => {
        //if newQuantity > productquantity(productId) return false
        productMap.value[productId].quantity = newQuantity
        saveCart()
        return true
    };
    
    const getProduct = (productId) => {
        return productMap.value.get(productId);
    };
    
    const saveCart = () => {
        localStorage.setItem(userId, JSON.stringify(productMap.value));
    };
    
    //Called during login/register to create cart or retrieve from localStorage
    const getCart = (usrId) => {
        userId.value = usrId;
        const cart = localStorage.getItem(userId);
        productMap.value = cart ? JSON.parse(cart) : new Map();
    };

    //Called during logout
    const stashCart = () => {
        saveCart()
        productMap.value = new Map()
        userId.value = undefined
    }
    
    //Called when user finished shopping and is checking out
    const removeCart = () => {
        localStorage.removeItem(userId);
        productMap.value = new Map();
    };


    return {productMap, addProduct, deleteProduct, changeProductQuantity, getProduct, saveCart, getCart, stashCart, removeCart}

})

