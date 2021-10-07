<template>
  <div class="row mt-5" v-if="product">
      <div class="col-4">
        <img :src="product.image" class="w-100" />
      </div>
      <div class="col-8">
        <h1>{{product.title}}</h1>
        <h3><strong>Price:$</strong>{{product.price}}</h3>
        <input type="text" class="text-center col-1 mr-2 p-1" />
        <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
        <p class="mt-4"><h6><b>Detailed Description:</b></h6>{{product.description}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:["id"],
  computed:{
    product(){
      return this.$store.state.product

    },
    
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