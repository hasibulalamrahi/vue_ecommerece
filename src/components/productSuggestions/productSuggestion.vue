<template>
  <div>
      <div>
          <p>Similar Products You may like of this {{categor.category}}</p>
        <div v-if="mensClothing">
            <div class="d-flex align-items-stretch flex-wrap">
                <product-card v-for="product in mensClothing" :key="product.id" :product="product"></product-card>
        

            </div>          
        </div>
        <div v-if="womensClothing">
            <div class="d-flex align-items-stretch flex-wrap">
                <product-card v-for="product in womensClothing" :key="product.id" :product="product"></product-card>
        

            </div>          
        </div>
      </div>
  </div>
</template>

<script>
import productCard from '../../components/productCard.vue'
export default {
    components:{
        'product-card':productCard
    },
    props:{
          categor:{
              type:Object
          }
    },
    data(){
        return{
            mensClothing:false,
            womensClothing:false
        }
    },
    computed:{
    mensClothing(){
      return this.$store.state.mensClothing
    },
    womensClothing(){
      return this.$store.state.womensClothing

    }
    
  },

    mounted(){
      // console.log(this.id)
      if(categor.category == "men's clothing"){
          this.mensClothing= true;
          alert("hello")

      }
      else if(categor.category == "women's clothing"){
          this.womensClothing = true;
          this.mensClothing= false;

      }
    },


}
</script>

<style>

</style>