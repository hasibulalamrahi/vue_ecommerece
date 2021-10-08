export const SET_PRODUCTS =(state,products)=>{
    state.products = products;
    // console.log(state.products)
}

export const SET_PRODUCT = (state,product ) =>{
    state.product = product;
}

export const GET_MENS_CLOTHING = (state,mensProducts) =>{
    // console.log(mensProducts.length)
    // console.log(mensProducts[0].category)
    for(let i=0;i<=mensProducts.length;i++){
        if(mensProducts[i].category =="men's clothing"){
            // console.log(mensProducts[i])
            state.mensClothing.push(mensProducts[i])
            // console.log(state.mensClothing)
        }
        else if(mensProducts[i].category =="jewelery"){
            state.jewellery.push(mensProducts[i])
            // console.log(state.jewellery)

        }
        else if(mensProducts[i].category =="electronics"){
            state.electronics.push(mensProducts[i])
            // console.log(state.electronics)

        }
        else if(mensProducts[i].category =="women's clothing"){
            state.womensClothing.push(mensProducts[i])
            console.log(state.womensClothing)

        }
    }
    // console.log(state.mensClothing)
}

export const ADD_TO_CART = (state,{product,quantity}) =>{
    let productInCart = state.cart.find(item=>{
        return item.product.id === product.id;
    })

    if(productInCart){
        productInCart.quantity +=quantity;
        return
    }
    
    state.cart.push({
        product,
        quantity
    })
}

export const REMOVE_PRODUCT_FROM_CART = (state,product) =>{
    state.cart = state.cart.filter(item =>{
        return item.product.id !== product.id;
    })
}

export const CLEAR_CART_ITEMS = (state) =>{
    state.cart = [];
}