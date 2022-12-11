<template>
  <div>
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" required name="title" v-model="thing.title">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Title</label>
        <input type="text" class="form-control" id="description" required name="description" v-model="thing.description">
      </div>
      <div class="mb-3">
        <button @click="saveThing" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">
        Save customer successfully!
      </div>
      <button @click="newThing" class="btn btn-primary">Add New Thing</button>
    </div>
  </div>
</template>

<script>
import ThingDataService from "@/services/ThingDataService";
export default {
  name: "add-thing",
  data() {
    return {
      thing: {
        id: null,
        title: "",
        description: ""
      },
      submitted: false
    }
  },
  methods:{
    saveThing(){
      var data = {
        title: this.thing.title,
        description: this.thing.description
      }
      ThingDataService.create(data)
          .then(responce => {
            this.thing.id = responce.data.id
            this.submitted = true;
          })
          .catch(e => {
            alert(e)
          })
    },
    newThing(){
      this.submitted = false
      this.thing = {}
    }
  }
}

</script>

<style scoped>

</style>