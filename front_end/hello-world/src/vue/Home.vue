<template>
  <button @click="switchToLogin()" >Login</button>
  <button @click="switchToRegister()" >Register</button>
</template>

<script>
export default {
  name: "Home.vue",
  methods:{
    switchToLogin: function(){
      this.$router.push('/login')
    },
    switchToRegister: function(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

</style>