<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Реестр граждан:</h4>
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
        </tr>
        </thead>
        <tbody>
        <tr
            :class="{ active: index === currentIndex }"
            v-for="(gilec, index) in citizens"
            :key="index"
            @click="setActiveGilec(gilec, index)">
          <td>{{ gilec.first_name }}</td>
          <td>{{ gilec.middle_name }}</td>
          <td>{{ gilec.last_name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <div v-if="currentGilec.id">
        <h4>Анкета</h4>
        <div>
          <label><strong>ID:</strong></label> {{ currentGilec.id }}
        </div>
        <div>
          <label><strong>Фамилия:</strong></label> {{ currentGilec.first_name }}
        </div>
        <div>
          <label><strong>Имя:</strong></label> {{ currentGilec.middle_name }}
        </div>
        <div>
          <label><strong>Отчество:</strong></label> {{ currentGilec.last_name }}
        </div>
        <div>
          <label><strong>Дата рождения:</strong></label> {{ currentGilec.birth_date }}
        </div>
        <div>
          <label><strong>Снилс:</strong></label> {{ currentGilec.snils }}
        </div>
        <div>
          <label><strong>Авто:</strong></label> {{ currentGilec.is_auto }}
        </div>
        <router-link
            :to="'/' + currentGilec.id">
          <button  id="myButton" class="btn btn-dark">Править</button>          
        </router-link>
      </div>
      <div v-else>
        <br />
        <p>Выберите гражданина</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";

export default defineComponent({
  name: "gilec-list",
  data() {
    return {
      citizens: [] as Gilec[],
      currentGilec: {} as Gilec,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveGilec() {
      GilecDataService.getAll()
          .then(r => r.json())
          .then(json => {
            this.citizens = json;
            console.log(json)
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
    }
  },
  mounted() {
    this.retrieveGilec();
  },
});
</script>
<style>
.list {
  text-align: left;
  max-width: 1300px;
  margin: auto;
}
</style>