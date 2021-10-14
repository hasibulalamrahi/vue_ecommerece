<template>
  <div>
    <div>
      <h1 class="header">Welcome to Cart</h1>
      <div>
      <button type="button" class="btn btn-danger" @click="clearCartItems()">Delete Whole Cart?</button>
      </div>
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
      <th scope="col">Delete Product</th>
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
      <td><button class="button" @click="addToCart(item.product,item.quantity)">+</button><a href="#" class="quantity" >{{item.quantity}}</a><button class="button" @click="deductQuantity(item.quantity,item.product)">-</button></td>
      <td><i class="fas fa-trash-alt" @click="removeProductFromCart(item.product)" ></i></td>
      <td>{{item.product.price }}</td>
    </tr>
    
    <tr>
      <td></td>
      <td> </td>
      <td> </td>
      <td></td>
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
      <button type="button" class="btn2 btn-secondary"><router-link to="/cart/checkout" class="nav-tem nav-link active">Checkout</router-link></button>
  </div>
</template>

<script>
let carts = 'shopping-cart';

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
    },
    methods:{
      addToCart(item,quantity){
        // console.log(item)
        console.log(quantity)

        this.$store.dispatch("addProductToCart",{
          product:item,
          quantity:1
        })
         localStorage.setItem(carts,JSON.stringify(this.$store.state.cart));
      },
      removeProductFromCart(product){
         this.$store.dispatch("removeProductFromCart",product);
        //  localStorage.setItem(cart,JSON.stringify(this.$store.state.cart))
      },
      clearCartItems(){
        this.$store.dispatch("clearCartItems");
      },

      deductQuantity(quantity,product){
        // alert(quantity)
        if(quantity>1){
          this.$store.dispatch("deduceFromCart",{
          product:product,
          quantity:1
        })
        localStorage.setItem(carts,JSON.stringify(this.$store.state.cart))

        }
        else{
          this.removeProductFromCart(product)
        }

      }
    }
    
}
</script>

<style scoped>
.header{
    margin-top: 20px;
    margin-bottom: 30px;
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

.button{
    /* display: block; */
    border:1px solid #4CAF50;
    background:rgb(209, 131, 131);
    padding: 10px 10px;
    color:white;
    font-size: 20px;
    font-weight: bolder;
    border-radius: 30%;
    cursor:pointer;
    outline:none;
    transition: border-color 1s, color 1s;

}

.button:hover{
    color: #aaa;
    border-color: #aaa;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}

.quantity{
    padding:5px;
    text-decoration: none;
    font-size: 20px;

}

.btn{
  margin-top:-80px;
  float: right;
}

.nav-item{
  text-decoration: none;
}



</style>