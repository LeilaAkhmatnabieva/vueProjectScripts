<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="first_name">Фамилия</label>
        <input
            type="text"
            class="form-control"
            id="first_name"
            required
            v-model="gilec.first_name"
            name="Фамилия"
        />
      </div>
      <div class="form-group">
        <label for="middle_name">Имя</label>
        <input
            type="text"
            class="form-control"
            id="middle_name"
            required
            v-model="gilec.middle_name"
            name="Имя"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Отчество</label>
        <input
            type="text"
            class="form-control"
            id="last_name"
            required
            v-model="gilec.last_name"
            name="Отчество"
        />
      </div>
      <div class="<form-group>">
        <label for="birth_date">Дата рождения</label>
        <input
            type="date"
            class="form-control"
            id="birth_date"
            required
            v-model="gilec.birth_date"
            name="Дата рождения"
        />
      </div>
      <div class="form-group">
        <label for="snils">СНИЛС</label>
        <input
            type="number"
            class="form-control"
            id="snils"
            required
            v-model="gilec.snils"
            name="СНИЛС"
        />
      </div>
      <div class="<b-form-checkbox>">
        <label for="is_auto">Авто</label>
        <input
            type="checkbox"
            class="submit-form"
            id="is_auto"
            required
            v-model="gilec.is_auto"
            name="Авто"
        />
      </div>
      <button @click="saveGilec" class="btn btn-success">Сохарнить</button>
    </div>
    <div v-else>
      <h4>Успешно добавлен</h4>
      <button class="btn btn-success" @click="newGilec">Добавить</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";
//import ResponseData from "@/Models/ResponseData";
export default defineComponent({
  name: "add-gilec",
  data() {
    return {
      gilec: {
        id: null,
        first_name: "",
      } as Gilec,
      submitted: false,
    };
  },
  methods: {
    saveGilec() {
      let data = {
        id: 0,
        first_name: this.gilec.first_name ?? null,
        middle_name: this.gilec.middle_name ?? null,
        last_name: this.gilec.last_name ?? null,
        birth_date: this.gilec.birth_date ?? null,
        snils: this.gilec.snils ?? null,
        is_auto: this.gilec.is_auto ?? null
      };
      GilecDataService.create(data)
          .then(json => {
            //this.gilec.id = r.data.id;
            console.log(json);
            this.submitted = true;
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
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