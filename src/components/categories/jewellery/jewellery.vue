<template>
  <div>
    <div class="jewelery">
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in jeweleryProducts" :key="product.id" :product="product"></product-card>
        

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
    jeweleryProducts(){
      return this.$store.state.jeweleryProducts
    }
  },
    mounted(){
    this.$store.dispatch('getJeweleryProducts');
  }
}
</script>

<style scoped>
 .jewelery{
  margin-top:40px;

}

 
</style>