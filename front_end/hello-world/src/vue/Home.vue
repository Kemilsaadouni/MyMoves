<template>
  <button @click="switchToLogin()" >Login</button>
  <button @click="switchToRegister()" >Register</button>
  <div>
    <div v-if="movie_list.length == []">
      <p>No movies found. Please, try again later.</p>
    </div>
    <div v-else>
      <h1>Movies</h1>
      <div v-for="movie in movie_list" :key="movie.id">
        <MovieComponent :id="movie.id" :title="movie.title"  :release_date="movie.release_date" :runtime="movie.runtime"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComponent from "@/components/MovieComponent";
import axios from "axios";
export default {
  components: {
    MovieComponent
  },
  data() {
    return {movie_list: []}
  },
  async mounted() {
    try{
      const response = await axios.get('http://localhost:3000/movies/', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      this.movie_list = response.data
    } catch (error){
      console.error(error);
    }
  },
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