import axios from "axios";
export const getProducts=({commit}) =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
        commit('SET_PRODUCTS',response.data)
        // console.log(response.data)
    })
}

 export const getProduct = ({commit},productId) =>{
     console.log(productId)
     axios.get(`https://fakestoreapi.com/products/${productId}`)
     .then(response =>{
         commit('SET_PRODUCT',response.data)
     })
 }

 export const getMensClothing = ({commit}) =>{
     axios.get('https://fakestoreapi.com/products')
     .then(response =>{
         commit('GET_MENS_CLOTHING',response.data)
     })
 }

 export const addProductToCart =({commit},{product,quantity}) =>{
     commit('ADD_TO_CART',{product,quantity});
 }

 export const removeProductFromCart = ({commit},product) =>{
     commit('REMOVE_PRODUCT_FROM_CART',product);
 } 
 
 export const clearCartItems = ({commit}) =>{
     commit('CLEAR_CART_ITEMS');
 }