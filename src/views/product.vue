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
           <h3>Similar Product you may like from the category Electronics</h3> <hr>
           <electronics-product ></electronics-product>
        </div>
        <div v-if="product.category== 'jewelery' ">
          <h3>Similar Product you may like from the category Jeweleey</h3> <hr>
          <jewelery-product></jewelery-product>
        </div>
        <div v-if="product.category==  mensCloth ">
          <h3>Similar Product you may like from the category Mens Clothing</h3> <hr>
          <mens-clothing ></mens-clothing>
        </div>
        <div v-if="product.category==  womensCloth ">
          <h3>Similar from Womens Clothing</h3><hr>
           <womens-clothing></womens-clothing>
        </div>
    </div>
    <!-- <product-suggestions :categor="product"></product-suggestions> -->
  </div>
</template>

<script>
import mensClothing from '../components/categories/mensClothing/mensClothingCard'
import womensClothing from '../components/categories/womensClothing/womensClothing'
import electronicsProduct from '../components/categories/electronics/electronics'
import jeweleryProduct from '../components/categories/jewellery/jewellery'
export default {

  components:{
    'mens-clothing':mensClothing,
    'womens-clothing':womensClothing,
    'electronics-product':electronicsProduct,
    'jewelery-product':jeweleryProduct,


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

<style scoped>
  .w-100:hover{
    transform: scale(1.5);
    z-index: 3;
  }

  h3{
    padding-top: 30px;
    text-align: left;
    font-weight: bold;

    
  }
</style>