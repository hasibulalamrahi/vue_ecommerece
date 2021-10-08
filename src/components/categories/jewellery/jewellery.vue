<template>
  <div class="col-3 mt-3 px-2">
        <div class="card h-100 text-left">
          <img class ="product__image" :src="product.image" alt/>
          <div class="card-body">
            <h4 class="card-title">
              <router-link class="title" :to="{name:'product',params:{id:product.id}}">{{product.title}}</router-link>
            </h4>
            <h6 class="price"><strong>${{product.price}}</strong></h6>
            <p class="card_description">{{product.description}}</p> <br>
            <p class="card-text">Rating:{{product.rating.rate}}</p>
          </div>
          <div class="px-4 pb-3">
            <button class="btn btn-success" id="cart">Buy Now</button>
            <button class="btn btn-warning" id="cart" @click="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:["product"],
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

<style scoped>
    .title{
  font-size: 20px;
  text-decoration: none;
}
.product__image  {
  /* margin-right: 1rem; */
  padding: 10px;
  height: 15rem;
  width: 15rem;
  object-fit: cover;
  background-repeat: no-repeat;
  /* justify-content: center; */
  background-position: center center center;
  /* object-position: center center; */
  
}

.product__image:hover{
  transform: scale(1.3);
  z-index: 2;
}

.price{
  text-align: center;
  font-size:25px;
  color: red;

}
.card-text{
  padding: 0px;
  margin-top: 0.5px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;

}

.card_description{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
#cart{
  width: 100%;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  border: none;
  outline: none;
}
</style>