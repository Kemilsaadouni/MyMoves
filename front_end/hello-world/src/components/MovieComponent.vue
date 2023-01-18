<template>
  <div>
    <h3>{{title}}</h3>
    <img :src=image :alt=title>
    <div>
      <ul>
        <li>Duration: {{runtime}}</li>
        <li>Release date: {{release_date}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieComponent.vue",
  props: {
    id : {required: true, type: Number},
    title: {required: true, type: String},
    runtime: {required: true, type: Number},
    release_date: {required: true, type: String},
    image: {required: true, type: String}
  },
}
</script>

<style scoped>

</style>