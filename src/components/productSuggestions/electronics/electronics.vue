<template>
  <div>
      <div>
          <h5 class="header">Similar Products You may like of this {{products.category}}</h5> <hr>
        <div>
            <div class="d-flex align-items-stretch flex-wrap">
                <product-card v-for="product in electronicsProducts" :key="product.id" :product="product"></product-card>
        

            </div>          
        </div>
        
      </div>
  </div>
</template>

<script>
import productCard from '../../productCard.vue'
export default {
    components:{
        'product-card':productCard
    },
    props:{
          products:{
              type:Object,
              required:true
          }
    },
    data(){
        return{
            
            suggestedCategory:''
        }
    },
    computed:{
    
    electronicsProducts(){
        return this.$store.state.electronicsProducts
    }
    
  },

    
    mounted(){
        this.$store.dispatch("getElectronicsProducts");

    },
    methods:{
        
    }


}
</script>

<style scoped>
    .header{
        margin-top: 130px;
        font-size: 30px;
        text-align: left;
        font-weight:bold;
    }
</style>