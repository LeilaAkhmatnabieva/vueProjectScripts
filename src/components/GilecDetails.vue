<template>
  <div v-if="currentGilec.id" class="edit-form">
    <h4>Gilec</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentGilec.first_name"
        />
      </div>
<!--      <div class="form-group">-->
<!--        <label for="description">Description</label>-->
<!--        <input-->
<!--            type="text"-->
<!--            class="form-control"-->
<!--            id="description"-->
<!--            v-model="currentGilec.description"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <label><strong>Status:</strong></label>-->
<!--        {{ currentGilec.published ? "Published" : "Pending" }}-->
<!--      </div>-->
    </form>
<!--    <button-->
<!--        class="badge badge-primary mr-2"-->
<!--        v-if="currentGilec.published"-->
<!--        @click="updatePublished(false)"-->
<!--    >-->
<!--      UnPublish-->
<!--    </button>-->
<!--    <button-->
<!--        v-else-->
<!--        class="badge badge-primary mr-2"-->
<!--        @click="updatePublished(true)"-->
<!--    >-->
<!--      Publish-->
<!--    </button>-->
    <button class="badge badge-danger mr-2" @click="deleteGilec">
      Delete
    </button>
    <button type="submit" class="badge badge-success" @click="updateGilec">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";
//import ResponseData from "@/Models/ResponseData";
export default defineComponent({
  name: "gilec-details",
  data() {
    return {
      currentGilec: {} as Gilec,
      message: "",
      loading: false,
      post: null
    };
  },
  methods: {
    getGilec(): void {
      this.post = null;
      this.loading = true;
      fetch('weatherforecast')
          .then(r => r.json())
          .then(json => {
            this.currentGilec = json as Gilec;
            this.loading = false;
            return;
          });
    },
  //   updatePublished(status: boolean) {
  //     let data = {
  //       id: this.currentTutorial.id,
  //       title: this.currentTutorial.title,
  //       description: this.currentTutorial.description,
  //       published: status,
  //     };
  //     GilecDataService.update(this.currentTutorial.id, data)
  //         .then((response: ResponseData) => {
  //           console.log(response.data);
  //           this.currentTutorial.published = status;
  //           this.message = "The status was updated successfully!";
  //         })
  //         .catch((e: Error) => {
  //           console.log(e);
  //         });
  //   },
  //   updateTutorial() {
  //     GilecDataService.update(this.currentTutorial.id, this.currentTutorial)
  //         .then((response: ResponseData) => {
  //           console.log(response.data);
  //           this.message = "The tutorial was updated successfully!";
  //         })
  //         .catch((e: Error) => {
  //           console.log(e);
  //         });
  //   },
  //   deleteTutorial() {
  //     GilecDataService.delete(this.currentTutorial.id)
  //         .then((response: ResponseData) => {
  //           console.log(response.data);
  //           this.$router.push({ name: "tutorials" });
  //         })
  //         .catch((e: Error) => {
  //           console.log(e);
  //         });
  //   },
  },
  mounted() {
    this.message = "";
    this.getGilec();
  },
});
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>