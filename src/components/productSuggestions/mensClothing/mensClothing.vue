<template>
  <div>
      <div>
          <h5 class="header">Similar Products You may like of the same category: {{products.category}}</h5> <hr>
        <div>
            <div class="d-flex align-items-stretch flex-wrap">
                <product-card v-for="product in mensClothing " :key="product.id" :product="product"></product-card>
        

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
    
    mensClothing (){
        return this.$store.state.mensClothing 
    }
    
  },

    
    // mounted(){
    //     this.$store.dispatch("getJeweleryProducts");

    // },
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