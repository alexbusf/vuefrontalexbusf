<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="(thing, index) in things" :key="index">
      <tr>
        <td>{{thing.title}}</td>
        <td>{{thing.description}}</td>
        <td><a :href="'/things/' + thing.id" class="btn btn-primary">Edit</a></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import ThingDataService from "@/services/ThingDataService";
export default {
  name: "things-list",
  data(){
    return{
      things: []
    }
  },
  methods: {
    retrieveThings(){
      ThingDataService.getAll()
          .then(response  => {
            this.things = response.data
          })
          .catch(e => {
            alert(e)
          })
    }
  },
  mounted(){
    this.retrieveThings()
  }
}
</script>

<style scoped>

</style>