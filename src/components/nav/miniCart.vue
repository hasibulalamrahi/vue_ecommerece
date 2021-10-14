<template>
  <div>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-cart-plus" id="cart"> <sup class="sup">{{cartItemCount}}</sup></i>
       </a>
          
      <div class="dropdown-menu p-2" @click="$event.stopPropagation()"
                style="min-width:320px; right:0; left:auto" 
                aria-labelledby="triggerId">
                <div>
                  <div v-for="item in cart" :key="item.product.id">
                    <div class="px-2 d-flex justify-content-between">
                        <div>
                            <strong>
                                {{item.product.title }}
                            </strong>
                            <br/> {{item.quantity}}x${{item.product.price}}
                        </div>
                        <div>
                            <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
                        </div>

                    </div>
                </div>
                <hr/>
                <div class="d-flex justify-content-between">
                    <span>Total: ${{cartTotalPrice}}</span>
                    <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
                </div> <br>
                <div>
                  <button type="button" class="btn btn-info" id="checkout"><router-link to="/cart" class="nav-tem nav-link active">Edit Cart</router-link> </button>
                </div>
                <div>
                  <button type="button" class="btn btn-danger" id="checkout"><router-link to="/cart/checkout" class="nav-tem nav-link active">Checkout</router-link> </button>
                </div>
      
    </div>
    </div>
        </li>
       </div>
</template>

<script>
const carts = 'shopping-cart';

export default {
    created(){
      this.$store.state.cart=  JSON.parse(localStorage.getItem(carts)|| '[]');
    },
    computed:{
      cart(){
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
      removeProductFromCart(product){
         this.$store.dispatch("removeProductFromCart",product);
        //  localStorage.setItem(cart,JSON.stringify(this.$store.state.cart))
      },
      clearCartItems(){
        this.$store.dispatch("clearCartItems");
      }
    },

    // mounted(){
    //   this.$store.dispatch('getCartItems')
    // }

    
}
</script>

<style>
    #checkout{
  padding-bottom: 50px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  border: none;
  outline: none;
}

#cart{
  color:white;
  margin-right: 20px;
  margin-top:15px;
}

.sup{
  margin-bottom: 5px;
  padding:10px;
}
</style>