import axios from "axios";
export const getProducts=({commit}) =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
        commit('SET_PRODUCTS',response.data)
        // console.log(response.data)
    })
}

 export const getProduct = ({commit},productId) =>{
    //  console.log(productId)
     axios.get(`https://fakestoreapi.com/products/${productId}`)
     .then(response =>{
         commit('SET_PRODUCT',response.data)
     })
 }

 export const getMensClothing = ({commit}) =>{
     axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
     .then(response =>{
         commit('GET_MENS_CLOTHING',response.data)
     })
 }

 export const getWomensClothing=({commit}) =>{
    axios.get("https://fakestoreapi.com/products/category/women's%20clothing")

    .then(response =>{
        commit('GET_WOMENS_CLOTHING',response.data)
    })
}

 export const getElectronicsProducts=({commit}) =>{
    axios.get('https://fakestoreapi.com/products/category/electronics')

    .then(response =>{
        commit('GET_ELECTRONICS_PRODUCTS',response.data)
    })
}

export const getJeweleryProducts=({commit}) =>{
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(response =>{
        commit('GET_JEWELERY_PRODUCTS',response.data)
    })
}

// export const addUser=(data) =>{
//     // console.log(data)
//     axios.post('https://fakestoreapi.com/users',data)
//     .then(
//         res =>{
//             console.log(res)
//         }
//     ).catch(
//         err =>{
//             console.log(err)
//         }
//     )
// }

 export const addProductToCart =({commit,dispatch},{product,quantity}) =>{
     commit('ADD_TO_CART',{product,quantity});
    
    dispatch('addNotification',{
        type:'success',
        message:'Product added to cart'
    },{ root:true})
 }

 export const deduceFromCart =({commit,dispatch},{product,quantity}) =>{
    commit('DEDUCE_FROM_CART',{product,quantity});
   
   dispatch('addNotification',{
       type:'danger',
       message:'Quantity reduced by one'
   },{ root:true})
}

 export const getCartItems = ({commit}) =>{
    axios.get('https://fakestoreapi.com/carts')
    .then(response =>{
        commit('SET_CART',response.data)
    })
 }

 export const removeProductFromCart = ({commit,dispatch},product) =>{
     commit('REMOVE_PRODUCT_FROM_CART',product);

     dispatch('addNotification',{
         type:'success',
         message: 'Product removed from cart'
     },{root:true});
 } 
 
 export const clearCartItems = ({commit,dispatch}) =>{
     commit('CLEAR_CART_ITEMS');
     dispatch('addNotification',{
        type:'success',
        message: 'All Products removed from cart'
    },{root:true});
 }

 export const addNotification = ({commit},notification) =>{
     commit('PUSH_NOTIFICATION',notification);
 }

 export const removeNotification = ({commit},notification) =>{
     commit('REMOVE_NOTIFICATION',notification)
 }