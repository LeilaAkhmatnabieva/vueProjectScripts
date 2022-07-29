<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="first_name">Title</label>
        <input
            type="text"
            class="form-control"
            id="first_name"
            required
            v-model="gilec.first_name"
            name="title"
        />
      </div>
<!--      <div class="form-group">-->
<!--        <label for="description">Description</label>-->
<!--        <input-->
<!--            class="form-control"-->
<!--            id="description"-->
<!--            required-->
<!--            v-model="gilec.description"-->
<!--            name="description"-->
<!--        />-->
<!--      </div>-->
<!--      <button @click="saveGilec" class="btn btn-success">Submit</button>-->
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newGilec">Add</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";
//import ResponseData from "@/Models/ResponseData";
export default defineComponent({
  name: "add-gilec",
  data() {
    return {
      gilec: {
        id: null,
        first_name: "",
        //description: "",
        //published: false,
      } as Gilec,
      submitted: false,
    };
  },
  methods: {
    // saveTutorial() {
    //   let data = {
    //     title: this.tutorial.title,
    //     description: this.tutorial.description,
    //   };
    //   GilecDataService.create(data)
    //       .then((response: ResponseData) => {
    //         this.tutorial.id = response.data.id;
    //         console.log(response.data);
    //         this.submitted = true;
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    // },
    newGilec() {
      this.submitted = false;
      this.gilec = {} as Gilec;
    },
  },
});
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>