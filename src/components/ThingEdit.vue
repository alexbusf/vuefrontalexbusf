<template>
  <div v-if="currentThing">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" required name="title" v-model="currentThing.title">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Title</label>
      <input type="text" class="form-control" id="description" required name="description" v-model="currentThing.description">
    </div>
    <div class="mb-3">
      <button @click="updateThing" class="btn btn-primary me-3">Update</button>
      <button @click="deleteThing" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{message}}
    </div>
  </div>

</template>

<script>
import ThingDataService from "@/services/ThingDataService";
export default {
  name: "edit-thing",
  data(){
    return{
      currentThing: null,
      message: ''
    }
  },
  methods:{
    getThing(id){
      ThingDataService.get(id)
          .then(response => {
            this.currentThing = response.data;
          })
          .catch(e => {
            alert(e);
          });
    },
    updateThing(){
      ThingDataService.update(this.currentThing.id, this.currentThing)
          .then(() => {
            this.message = 'The customer was updated successfully!'
          })
          .catch(e => {
            alert(e);
          });
    },
    deleteThing(){
      ThingDataService.delete(this.currentThing.id)
          .then(() => {
            this.$router.push({name: 'things'})
          })
          .catch(e => {
            alert(e)
          })
    }
  },
  mounted() {
    this.getThing(this.$route.params.id);
  }
};
</script>

<style scoped>

</style>