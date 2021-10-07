<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <header-nav></header-nav> -->
    <product-list></product-list>
  </div>
</template>

<script>
// @ is an alias to /src
import productList from '../components/productList.vue'
// import header from '../components/header'

export default {
  name: 'Home',
  components: {
    'product-list':productList,
    // 'header-nav':header
  }
}
</script>
