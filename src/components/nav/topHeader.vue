<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <img class="logo" src="../../assets/logo.png"/>
    <h3>  ue E-commerece</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
       
        <mini-cart></mini-cart>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            0 cart
          </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> -->
        <!-- </li> --> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Register</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
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

<style>
    .logo{
    display: block;
    margin:5px auto;
    height: 33px;
}
</style>