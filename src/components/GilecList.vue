<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search by title"
            v-model="title"
        />
        <div class="input-group-append">
          <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Реестр граждан</h4>
      <ul class="list-group">
        <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(gilec, index) in gilec"
            :key="index"
            @click="setActiveGilec(gilec, index)"
        >
          {{ gilec.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllGilec">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentGilec.id">
        <h4>Gilec</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentGilec.first_name }}
        </div>
        <div>
          <label><strong>first_name:</strong></label>
          {{ currentGilec.first_name }}
        </div>
<!--        <div>-->
<!--          <label><strong>Status:</strong></label>-->
<!--          {{ currentGilec.published ? "Published" : "Pending" }}-->
<!--        </div>-->
        <router-link
            :to="'/gilec/' + currentGilec.id"
            class="badge badge-warning"
        >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";
import ResponseData from "@/Models/ResponseData";

export default defineComponent({
  name: "gilec-list",
  data() {
    return {
      gilec: [] as Gilec[],
      currentGilec: {} as Gilec,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveGilec() {
      GilecDataService.getAll()
          .then((response: ResponseData) => {
            this.gilec = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveGilec();
      this.currentGilec = {} as Gilec;
      this.currentIndex = -1;
    },
    setActiveGilec(gilec: Gilec, index = -1) {
      this.currentGilec = gilec;
      this.currentIndex = index;
    },
    // removeAllTutorials() {
    //   GilecDataService.deleteAll()
    //       .then((response: ResponseData) => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    // },
    // searchTitle() {
    //   GilecDataService.findByTitle(this.title)
    //       .then((response: ResponseData) => {
    //         this.tutorials = response.data;
    //         this.setActiveTutorial({} as Tutorial);
    //         console.log(response.data);
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    // },
  },
  mounted() {
    this.retrieveGilec();
  },
});
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>