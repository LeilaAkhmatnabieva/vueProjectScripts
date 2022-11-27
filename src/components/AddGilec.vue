<template>
  <div v-if="!submitted">
    <div class="form-group row">
      <div class="form-group col-md-6 mb-3">
        <label for="first_name">Фамилия</label>
        <vue-mask
            class="form-control"
            id="first_name"
            mask="ABBBBBBBBBBBBBBBB"
            v-model="gilec.first_name"
            :raw="false"
            :options = options
        />
      </div>
      <div class="form-group col-md-6 mb-3">
        <label for="birth_date">Дата рождения</label>
        <input
            type="date"
            class="form-control"
            id="birth_date"
            required
            v-model="gilec.birth_date"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="form-group col-md-6 mb-3">
        <label for="middle_name">Имя</label>
        <vue-mask
            class="form-control"
            id="middle_name"
            mask="ABBBBBBBBBBBBBBBB"
            v-model="gilec.middle_name"
            :raw="false"
            :options = options
        />
      </div>
      <div class="form-group col-md-6 mb-3">
        <label for="snils">СНИЛС</label>
        <input
            type="number"
            class="form-control"
            id="snils"
            required
            v-model="gilec.snils"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="form-group col-md-6 mb-3">
        <label for="last_name">Отчество</label>
        <vue-mask
            class="form-control"
            id="last_name"
            mask="ABBBBBBBBBBBBBBBB"
            v-model="gilec.last_name"
            :raw="false"
            :options = options
        />
      </div>
    </div>
    <div class="form-group col-md-1 mb-3">
      <div class="form-check">
        <input
            type="checkbox"
            class="form-check-input"
            id="is_auto"
            required
            v-model="gilec.is_auto"
        />
        <label class="form-check-label" for="is_auto">Авто </label>
      </div>
    </div>
    <button @click="saveGilec" class="btn btn-success">Сохарнить</button>
  </div>
  <div v-else>
    <h4>Успешно добавлен</h4>
    <button class="btn btn-success" @click="newGilec">Добавить</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GilecDataService from "@/services/GilecDataService";
import Gilec from "@/Models/Gilec";
const vueMask = require('vue-jquery-mask');
export default defineComponent({
  components: {vueMask},
  name: "add-gilec",
  data() {
    return {
      gilec: {
        id: null,
        first_name: "",
      } as Gilec,
      submitted: false,
      options: {
        translation:{
          A: {pattern: /[А-Я]/},
          B: {pattern: /[а-я]/}
        }
      }
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