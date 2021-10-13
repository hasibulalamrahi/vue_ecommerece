<template>
  <div>
    <div class="womens">
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in womensClothing" :key="product.id" :product="product"></product-card>
        

      </div>
    </div>
  </div>
</template>

<script>
import productCard from '../../productCard'

export default {
    // props:["product"],
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
    womensClothing(){
      return this.$store.state.womensClothing
    }
  },
    mounted(){
    this.$store.dispatch('getWomensClothing');
  }
}
</script>

<style scoped>
.womens{
  margin-top:40px;

}

 
</style>