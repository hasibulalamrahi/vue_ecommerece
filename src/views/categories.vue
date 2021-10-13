<template>
  <div>
      <h2 class="heading">Mens Clothing</h2><hr>
      <mens-clothing></mens-clothing>
      <h2 class="heading">Womens Clothing</h2><hr>
      <womens-clothing></womens-clothing>
       <h2 class="heading">Jewelery</h2><hr>
      <jewelery-products></jewelery-products>
       <h2 class="heading">Electronics</h2><hr>
      <electronics-products></electronics-products>
  </div>
</template>

<script>
import mensClothing from '../components/categories/mensClothing/mensClothingCard'
import womensClothing from '../components/categories/womensClothing/womensClothing'
import jeweleryProducts from '../components/categories/jewellery/jewellery'
import electronicsProducts from '../components/categories/electronics/electronics'
import WomensClothing from '../components/categories/womensClothing/womensClothing.vue'
export default {
    components:{
        // 'product-categories':productCategories,
        'mens-clothing':mensClothing,
        'womens-clothing':womensClothing,
        'jewelery-products':jeweleryProducts,
        'electronics-products':electronicsProducts
        

        
    }
}
        WomensClothing
</script>

<style>
    .heading{
    margin-top:50px;
    margin-bottom:10px;
    font-weight: bold;
    text-align: left;
  }
</style>