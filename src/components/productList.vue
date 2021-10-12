<template>
  <div>
    <product-offers></product-offers>
    <div>
      <h1 class="headline"><strong>New Products</strong></h1> <hr>
      <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
        

      </div>
      <div>
        <exclusive-product></exclusive-product>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from './productCard'
import productOffers from './productOffers.vue'
import exclusiveProduct from './exProduct'
export default {
  components:{
    'product-offers':productOffers,
    'product-card':productCard,
    'exclusive-product':exclusiveProduct
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  mounted(){
    this.$store.dispatch('getProducts');
  }
}
</script>

<style>
  .headline{
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 2px;
    text-align: left;
  }
</style>