<template>
  <div>
    <div>
      <h1 class="headline"><strong>Mens Clothing</strong></h1> <hr>
      <div class="d-flex align-items-stretch flex-wrap">
        <mens-clothing v-for="product in mensClothing" :key="product.id" :product="product" ></mens-clothing>

      </div>
    </div>
    <div>
      <h1 class="headline"><strong>Jewellery</strong></h1> <hr>
      <div class="d-flex align-items-stretch flex-wrap">
        <womens-jewellery v-for="product in jewellery" :key="product.id" :product="product" ></womens-jewellery>

      </div>
    </div>
    <div>
      <h1 class="headline"><strong>Electronics</strong></h1> <hr>
      <div class="d-flex align-items-stretch flex-wrap">
        <electronics-products v-for="product in electronics" :key="product.id" :product="product" ></electronics-products>

      </div>
      
    </div>
    <div>
      <h1 class="headline"><strong>Womens Clothing</strong></h1> <hr>
      <div class="d-flex align-items-stretch flex-wrap">
        <womens-clothing v-for="product in womensClothing" :key="product.id" :product="product" ></womens-clothing>

      </div>
      
    </div>
  </div>
</template>

<script>
import mensClothing from './mensClothing/mensClothingCard.vue'
import womensJewellery from './jewellery/jewellery'
import electronicsProducts from './electronics/electronics'
import womensClothing from './womensClothing/womensClothing.vue'
export default {
  components:{
   'mens-clothing':mensClothing ,
   'womens-jewellery':womensJewellery,
   'electronics-products':electronicsProducts,
   'womens-clothing':womensClothing
  },
  computed:{
    mensClothing(){
      return this.$store.state.mensClothing
    },
    jewellery(){
      return this.$store.state.jewellery
    },
    electronics(){
      return this.$store.state.electronics
    },
    womensClothing(){
      return this.$store.state.womensClothing
    }
  },
  mounted(){
    this.$store.dispatch('getMensClothing');
  }
}
</script>

<style>

</style>