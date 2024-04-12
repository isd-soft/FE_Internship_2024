<script setup>
import { ModalsContainer } from 'vue-final-modal'
import AdminProductList from './components/admin/AdminProductList.vue';
import { useProductStore } from './stores/productStore';

const store = useProductStore();

store.initStore();

</script>


<template>
  <div>
    <ModalsContainer />
    <AdminProductList />
  </div>
</template>

<style lang="scss"></style>
