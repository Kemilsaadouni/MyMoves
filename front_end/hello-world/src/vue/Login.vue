<template>
  <div class="container">
    <h1 class="header">Login</h1>
    <form action="#">
      <div class="field input-field">
        <input class="email" type="email" required v-model="mailtext" >
        <label>Email Address</label>
      </div>
      <div class="field input-field">
        <input type="password" v-model="passwordtext" required>
        <label>Password</label>
      </div>
      <div class="form-link">
        <a class="forgot-pass">Forgot password?</a>
      </div>
      <div class="field button-field">
        <button @click="switchToHome()" v-on:click="loginUser()">Login</button>
      </div>
      <div class="form-link sign-up">
        <span>Don't have an account?</span> <a @click="switchToRegister()">Register now </a>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login.vue",
  data(){
    return{
      mailtext : '',
      passwordtext : ''
    }
  },
  methods: {
    async loginUser(){
      let data ={
        "email": this.mailtext,
        "password": this.passwordtext
      }
      const axios = require('axios')
      const response = (await axios.post('http://localhost:3000/login', data))
      console.log(response.data)
      window.localStorage.setItem('token', response.data.token)
    },
    switchToRegister: function(){
      this.$router.push('/register')
    },
    switchToHome: function (){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-size: 30px;
  text-align: center;
}

.container {
  margin: 5px auto;
  width: 380px;
  background-color: #fff;
  box-shadow: 0 15px 20px rgba(0,0,0,0.2);
  border-radius: 15px;

}

.container .header {
  color: white;
  font-size: 35px;
  font-weight: inherit;
  text-align: center;
  line-height: 100px;
  background-color: #3266AF;
  border-radius: 12px;
}

.container form {
  padding: 25px 30px;
}

.container form .field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
}

.container form .field input,
.container form .field button {
  width: 100%;
  height: 100%;
  border-radius: 25px;
  outline: none;
}

.container form .field button {
  border: none;
}

.container form .field input {
  border: 1px solid lightgrey;
  padding-left: 15px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  font-size: 17px;
}

.container form .field input:focus,
.container form .field input:valid {
  border-color: #3266AF;
}

.container form .field input:focus ~ label,
.container form .field input:valid ~ label{
  top: 0%;
  font-size: 16px;
  color: #3266AF;
  background-color: #fff;
}

.container form .field label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: 17px;
  color: #999;
}

.container form .form-link {
  color: #3266AF;
  margin-top: 20px;
  text-align: center;
}

.container form .form-link span {
  color: #888;
  font-size: 15px;
}
.container form .form-link a{
  font-size: 15px;
}

.container form .form-link .forgot-pass:hover,
.container form .sign-up a:hover {
  text-decoration: underline;
}

.container form .field button {
  color: #fff;
  background-color: #3266AF;
  font-size: 18px;
  font-weight: 500;
  padding-left: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.container form .field button:active,
.container form .field button:hover {
  transform: scale(0.95);
  background: rgb(63,0,77);
  background: linear-gradient(90deg, rgba(63,0,77,1) 0%, rgba(27,59,111,1) 50%, rgba(63,0,77,1) 100%);
  font-size: 19px;
}

</style>