<template>
  <div>
      <div>
          <div class="offer">
              <div class="small-container">
                  <div class="row">
                      <div class="col-2">
                          <img src="../assets/fashionImage/exclusive.png" class="offer-img">
                      </div>
                      <div class="col-2">
                          <div class="text">
                          <p>Exclusively Available on VUE-STORE</p>
                          <h1>Smart Band-4</h1>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta neque, libero illo iste exercitationem.</small><br>
                          <a href="" class="btn">Buy Now &#8594;</a>
                          </div>
                      </div>
                            
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div class="testimonial">
              <h2>Our Customer Reviews</h2>
              <div class="=small-container">
                  <div class="row">
                      <div class="col-3">
                          <i class="fa fa-quote-left"></i>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab quae libero, similique corrupti fugiat?</p>
                          <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star -o"></i>

                          </div>
                          <img src="../assets/customer/user-1.png">
                          <h3>Sean parker</h3>
                      </div>
                                            <div class="col-3">
                          <i class="fa fa-quote-left"></i>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab quae libero, similique corrupti fugiat?</p>
                          <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star -o"></i>

                          </div>
                          <img src="../assets/customer/user-2.png">
                          <h3>William Thampsing</h3>
                      </div>
                        <div class="col-3">
                          <i class="fa fa-quote-left"></i>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab quae libero, similique corrupti fugiat?</p>
                          <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star -o"></i>

                          </div>
                          <img src="../assets/customer/user-3.png">
                          <h3>Lara Perry</h3>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .small-container{
        max-width: 1080px;
        margin:auto;
        padding-left: 25px;
        padding-right: 25px;
    }
    .offer{
        background: radial-gradient(#fff,#ffd6d6);
        margin-top:80px;
        padding:30px 0;

    }
    .col-2 .offer-img{
        padding:50px;

    }

    .col-2{
        flex-basis: 50%;
        min-width:300px;
    }

    .col-3{
        flex-basis: 33%;
        min-width:150px;
    }
    .col-2 img{
        max-width:100%;
        padding: 50px 0;
    }

    .col-2 h1{
        font-size:50px;
        line-height: 60px;
        margin:25px 0;
    }

    .btn{
        display: inline-block;
        background: #ff523b;
        color:#fff;
        padding: 8px 30px;
        margin: 30px 0;
        border-radius:  30px;
    }

    .text{
        margin-top:90px;
        text-align: justify;
    }

    small{
        color:#555;
        font-size: 20px;
    }

    .testimonial{
        padding-top: 100px;
    }

    .testimonial .col-3{
        text-align: center;
        padding: 40px 20px;
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: transform 0.5s;

    }

    .testimonial .col-3 img{
        width:50px;
        margin-top: 20px;
        border-radius: 50%;
    }

    .testimonial .col-3 img{
        width:50px;
        margin-top:20px;
        border-radius: 50%;
    }

    .testimonial .col-3:hover{
        transform: translateY(-10px);
    }

    .fa.fa-quote-left{
        font-size: 34px;
        color:#ff523b;

    }
    
    .col-3 p{
        font-size:12px;
        margin: 12px 0;
        color:#777;
    }

    .testimonial .col-3 h3{
        font-weight: 600;
        color: #555;
        font-size: 16px;
    }

    h2{
        margin-bottom: 30px;
        font-size:40px;
        font-weight: bold;
    }
     


</style>