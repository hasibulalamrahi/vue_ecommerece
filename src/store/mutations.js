// import carts from '../components/nav/miniCart'
let carts = 'shopping-cart'
export const SET_PRODUCTS =(state,products)=>{
    state.products = products;
    // console.log(state.products)
    // for(let i=0;i<=mensProducts.length;i++){
    //     if(mensProducts[i].category =="men's clothing"){
    //         // console.log(mensProducts[i])
    //         state.mensClothing.push(mensProducts[i])
    //         // console.log(state.mensClothing)
    //     }
    //     else if(mensProducts[i].category =="jewelery"){
    //         state.jewellery.push(mensProducts[i])
    //         // console.log(state.jewellery)

    //     }
    //     else if(mensProducts[i].category =="electronics"){
    //         state.electronics.push(mensProducts[i])
    //         // console.log(state.electronics)

    //     }
    //     else if(mensProducts[i].category =="women's clothing"){
    //         state.womensClothing.push(mensProducts[i])
    //         console.log(state.womensClothing)

    //     }
    // }
    
}

export const SET_PRODUCT = (state,product ) =>{
    state.product = product;
}

export const GET_MENS_CLOTHING = (state,products) =>{
    state.mensClothing = products;

}
export const GET_WOMENS_CLOTHING =(state,products)=>{
    state.womensClothing = products;
    // console.log(state.electronicsProducts)
    
}
export const GET_ELECTRONICS_PRODUCTS=(state,products)=>{
    state.electronicsProducts = products;
    // console.log(state.electronicsProducts)
    
}

export const GET_JEWELERY_PRODUCTS =(state,products)=>{
    state.jeweleryProducts = products;
    // console.log(state.jeweleryProducts)
    
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
    localStorage.setItem(carts,JSON.stringify(state.cart))

}

export const DEDUCE_FROM_CART = (state,{product,quantity}) =>{
    let productInCart = state.cart.find(item=>{
        return item.product.id === product.id;
    })

    if(productInCart){
        productInCart.quantity -=quantity;
        return
    }
    
    state.cart.push({
        product,
        quantity
    })
    localStorage.setItem(carts,JSON.stringify(state.cart))

}

export const SET_CART =(state,cartItems) =>{
    state.cart = cartItems;
    console.log(state.cart)
}

export const REMOVE_PRODUCT_FROM_CART = (state,product) =>{
    state.cart = state.cart.filter(item =>{
        return item.product.id !== product.id;
    })
    localStorage.setItem(carts,JSON.stringify(state.cart))

}

export const CLEAR_CART_ITEMS = (state) =>{
    state.cart = [];
    localStorage.setItem(carts,JSON.stringify(state.cart))

}

export const PUSH_NOTIFICATION = (state,notification) =>{
    state.notifications.push({
        ...notification,
        id:(Math.random().toString(36)+ Date.now().toString(36)).substr(2)
    })
}

export const REMOVE_NOTIFICATION  = (state,notificationToRemove) =>{
    state.notifications = state.notifications.filter(notification =>{
        return notification.id != notificationToRemove.id;
    })
}
