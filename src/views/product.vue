<template>
  <div>
    <div class="row mt-5" v-if="product">
        <div class="col-4">
          <img :src="product.image" class="w-100" />
        </div>
        <div class="col-8">
          <h1>{{product.title}}</h1>
          <h3><strong>Price:$</strong>{{product.price}}</h3>
          <input type="text" class="text-center col-1 mr-2 p-1" />
          <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
          <h6 class="mt-4"><b>Detailed Description:</b></h6>{{product.description}}
        </div>
         <div v-if="product.category== 'electronics' ">
           <electronics-product :products="product"></electronics-product>
        </div>
        <div v-if="product.category== 'jewelery' ">
           <jewelery-product :products="product"></jewelery-product>
        </div>
        <div v-if="product.category==  mensCloth ">
           <mens-clothing :products="product"></mens-clothing>
        </div>
        <div v-if="product.category==  womensCloth ">
           <womens-clothing :products="product"></womens-clothing>
        </div>
    </div>
    <!-- <product-suggestions :categor="product"></product-suggestions> -->
  </div>
</template>

<script>
import electronicsProduct from '../components/productSuggestions/electronics/electronics'
import jeweleryProduct from '../components/productSuggestions/jewelleries/jewelleries'
import mensClothing from '../components/productSuggestions/mensClothing/mensClothing'
import womensClothing from '../components/productSuggestions/womensClothing/womensClothing.vue'
export default {

  components:{
    'electronics-product':electronicsProduct,
    'jewelery-product':jeweleryProduct,
    'mens-clothing':mensClothing,
    'womens-clothing':womensClothing
  },
  props:["id"],
  computed:{
    product(){
      // this.categor=this.$store.state.product.category
      return this.$store.state.product

    },
    
  },
  data(){
    return{
       mensCloth:"men's clothing",
       womensCloth:"women's clothing"
    }
  },
  mounted(){
      // console.log(this.id)
      this.$store.dispatch("getProduct",this.id);
    },

    methods:{
      addToCart(){
        this.$store.dispatch("addProductToCart",{
          product:this.product,
          quantity:1
        })
        localStorage.setItem(carts,JSON.stringify(this.$store.state.cart));
      }
    }
}
</script>

<style>
  .w-100:hover{
    transform: scale(1.5);
    z-index: 3;
  }
</style>