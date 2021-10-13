<template>
  <div>
    <div class="mens">
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in mensClothing" :key="product.id" :product="product"></product-card>
        

      </div>
    </div>
  </div>
</template>

<script>
import productCard from '../../productCard'

export default {
  components:{
      'product-card':productCard
    },
    methods:{
      addToCart(){
        this.$store.dispatch("addProductToCart",{
          product:this.product,
          quantity:1
        })
      }
    },
    computed:{
    mensClothing(){
      return this.$store.state.mensClothing
    }
  },
    mounted(){
    this.$store.dispatch('getMensClothing');
  }
}
</script>

<style>
  .mens{
    margin-top:20px;
  }
  
</style>