<template>
  <div>
    <div>
      <h1 class="header">Welcome to checkout</h1>
      <button type="button" class="btn btn-danger"><router-link to="/cart">Back to Cart</router-link></button>

      </div>
      <div>
          

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#Sl</th>
      <th scope="col">Product ID</th>
      <th scope="col">Product Title</th>
      <th scope="col">Product Category</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Product Price</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="item in cart" :key="item.id">
      <th>1</th>
      <td>  {{item.product.id }}</td>
      <td>{{item.product.title }}</td>
      <td>{{item.product.category }}</td>
      <td><img class="product__image" :src="item.product.image"/></td>
      <td>{{item.quantity}}</td>
      <td>{{item.product.price }}</td>
    </tr>
    
    <tr>
      <td></td>
      <td> </td>
      <td> </td>
      <td></td>
      <td></td>
       <td></td>

       <td> <div class="d-flex justify-content-between">
            <span>Total: ${{cartTotalPrice}}</span>
        </div>
        </td>
    </tr>
    
  </tbody>
</table>
      </div>
  </div>
</template>

<script>
export default {
    
    computed:{
        cart(){
        // console.log(this.$store.state.cart)

        return this.$store.state.cart;
      },
      cartItemCount(){
        return this.$store.getters.cartItemCount;
      },
      cartTotalPrice(){
         return this.$store.getters.cartTotalPrice;
      }
    }
    
}
</script>

<style scoped>
    .header{
        margin-top: 20px;
        margin-bottom: 30px;
    }

.btn{
  margin-top:-80px;
  float: left;
  text-decoration: none;
}

.product__image  {
  /* margin-right: 1rem; */
  padding: 10px;
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  background-repeat: no-repeat;
  /* justify-content: center; */
  background-position: center center center;
  /* object-position: center center; */
  
}
</style>