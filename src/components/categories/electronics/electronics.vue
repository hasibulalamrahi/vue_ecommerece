<template>
  <div>
    <div class="electronics">
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in electronicsProducts" :key="product.id" :product="product"></product-card>
        

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
    electronicsProducts(){
      return this.$store.state.electronicsProducts
    }
  },
    mounted(){
    this.$store.dispatch('getElectronicsProducts');
  }
}
</script>

<style scoped>
 .electronics{
  margin-top:40px;

}

 
</style>