<template>
  <div v-if="currentGilec.id" class="edit-form">
    <h4>Редактирование анкеты</h4>
    <form>
      <div class="form-group">
        <label for="first_name">Фамилия</label>
        <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="currentGilec.first_name"
        />
      </div>
      <div class="form-group">
        <label for="middle_name">Имя</label>
        <input
            type="text"
            class="form-control"
            id="middle_name"
            v-model="currentGilec.middle_name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Отчество</label>
        <input
            type="text"
            class="form-control"
            id="last_name"
            v-model="currentGilec.last_name"
        />
      </div>
      <div class="form-group">
        <label for="birth_date">Дата рождения</label>
        <input
            type="datetime-local"
            class="form-control"
            id="birth_date"
            v-model="currentGilec.birth_date"
        />
      </div>
      <div class="form-group">
        <label for="snils">Снилс</label>
        <input
            type="number"
            class="form-control"
            id="snils"
            v-model="currentGilec.snils"
        />
      </div>
      <div class="form-group">
        
      </div>
      <div class="b-form-checkbox">
        <label for="is_auto">Авто</label>
        <input
            type="checkbox"
            class="submit-form"
            id="is_auto"
            v-model="currentGilec.is_auto"
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
    <button class="btn btn-danger" @click="deleteGilec">
      Delete
    </button>
    <button class="btn btn-success" @click="updateGilec">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br/>
    <p>Выберите гражданина</p>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Gilec from "@/Models/Gilec";
import GilecDataService from "@/services/GilecDataService";
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
    getGilec(id: any) {
      GilecDataService.get(id)
          .then(r => r.json())
          .then(json => {
            this.currentGilec = json;
            console.log(json)
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
    updateGilec() {
      if (!this.currentGilec.first_name || !this.currentGilec.middle_name || !this.currentGilec.last_name)
      {
         this.message = "Заполните ФИО";
         return;
      }
      
      GilecDataService.update(this.currentGilec)
          .then(r => r.json())
          .then(json => {
            console.log('Success:', json);
            this.message = "Данные успешно обновлены";
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },
    deleteGilec() {
      GilecDataService.delete(this.currentGilec.id)
          .then(r => r.json())
          .then(json => {
            console.log(json);
            this.message = "Данные успешно удалены";
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getGilec(this.$route.params.id);
  },
});
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>