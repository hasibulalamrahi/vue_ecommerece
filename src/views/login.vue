<template>
  <div class="login">
      <div class="center"> 
         <div class="header">
            Login Form
         </div>
         <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Email or Username" v-model="userName">
            <i class="far fa-envelope"></i>
            <input id="pswrd" type="password" placeholder="Password" v-model="password">
            <i class="fas fa-lock" @click="show()"></i>
            <input type="submit" value="Sign in">
            <a href="#">Forgot Password?</a>
         </form>
      </div>
  </div> -->
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    show(){
          var pswrd = document.getElementById('pswrd');
          var icon = document.querySelector('.fas');
          if (pswrd.type === "password") {
           pswrd.type = "text";
           pswrd.style.marginTop = "20px";
           icon.style.color = "#7f2092";
          }else{
           pswrd.type = "password";
           icon.style.color = "grey";
          }
         },
         async handleSubmit(){
           const response =await axios.post('https://fakestoreapi.com/auth/login',{
             username:this.userName,
             password:this.password
           })
          //  console.log(response)
           localStorage.setItem('token',response.data.token);
           this.$router.push('/');
         }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
.login{
 margin-top: 30px;
 padding: 0;
 background: radial-gradient(#a429bc,#9225a7,#7f2092);
 height: 50vh;
 overflow: hidden;
 font-family: 'Noto Sans TC', sans-serif;
}
.center{
 width: 700px;
 margin: 100px auto;
 position: relative;
 margin-top: 70px;
 margin-bottom:50px;
}
.center .header{
 font-size: 28px;
 font-weight: bold;
 color: white;
 padding: 25px 0 30px 25px;
 background: #5c1769;
 border-bottom: 1px solid #370e3f;
 border-radius: 5px 5px 0 0;
}
.center form{
 position: absolute;
 background: white;
 width: 100%;
 padding: 50px 10px 0 30px;
 box-sizing: border-box;
 border: 1px solid #6d1c7d;
 border-radius: 0 0 5px 5px;
}
form input{
 height: 50px;
 width: 90%;
 padding: 0 10px;
 border-radius: 3px;
 border: 1px solid silver;
 font-size: 18px;
 outline: none;
}
form input[type="password"]{
 margin-top: 20px;
}
form i{
 position: absolute;
 font-size: 25px;
 color: grey;
 margin: 15px 0 0 -45px;
}
i.fa-lock{
 margin-top: 35px;
}
form input[type="submit"]{
 margin-top: 40px;
 margin-bottom: 40px;
 width: 130px;
 height: 45px;
 color: white;
 cursor: pointer;
 line-height: 45px;
 border-radius: 45px;
 border-radius: 5px;
 background: #5c1769;
}
form input[type="submit"]:hover{
 background: #491254;
 transition: .5s;
}
form a{
 text-decoration: none;
 font-size: 18px;
 color: #7f2092;
 padding: 0 0 0 20px;
}

</style>