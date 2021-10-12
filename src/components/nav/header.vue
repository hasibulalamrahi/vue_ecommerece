<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link to="/" class="nav-tem nav-link active" id="headItem">Home</router-link>
      </li>
      <li class="nav-item">
            <router-link to="/categories" class="nav-tem nav-link active" id="headItem">Categories</router-link>      
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#" id="headItem">Hot Deals</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#" id="headItem">Contact us</a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  components:{
    
  }
}
</script>

<style>
  .header{
    padding: 5px;
    text-align: center;

  }
  #headItem{
    font-weight: bold;
    font-size: 20px;
  }
</style>