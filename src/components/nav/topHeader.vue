<template>
  <div>
    <div class="topHeader">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <img class="logo" src="../../assets/logo.png"/>
        <h3 class="logoText">  ue  <strong>E-commerece</strong></h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
          
            <mini-cart></mini-cart>
            
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Login</a> -->
              <router-link to="/login" class="nav-tem nav-link active">Login</router-link>

            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-tem nav-link active">Register</router-link>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
    </div>
  </div>
</template>

<script>
import miniCart from './miniCart'
export default {
components:{
     'mini-cart': miniCart

    
  }
}
</script>

<style scoped>
    .logo{
    display: block;
    margin:5px auto;
    height: 33px;
    }

    .logoText{
      color:white
    }
</style>