<template>
  <div class ="container">
    <form  @submit.prevent="submitForm">
      <div class="row">
        <div class="col">
          <label>Id</label>
          <input type="text" class="form-control" id="id" v-model="gericht.id" @input="checkInputs">
        </div>
        <div class="col">
          <label>Name</label>
          <input type="text" class="form-control" id="name" v-model="gericht.name" @input="checkInputs">
        </div>
        <div class="col">
          <label>Beschreibung</label>
          <input type="text" class="form-control" id="beschreibung" v-model="gericht.beschreibung" @input="checkInputs">
        </div>
        <div class="col">
          <label>Preis</label>
          <input type="text" class="form-control" id="preis" v-model="gericht.preis" @input="checkInputs">
        </div>
      </div>
      <hr>
      <button type="submit" class="btn btn-primary" :disabled="submitButtonText === 'Submit'"
              :class="{ 'btn-warning': submitButtonText === 'Put','btn-danger': submitButtonText === 'Delete', 'btn-success': submitButtonText === 'Post' }">{{ submitButtonText }}</button>
      <hr>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      gericht: {
        id: '',
        name: '',
        beschreibung: '',
        preis: ''
      },
      allInputsEntered: false,
      submitButtonText: 'Submit'
    }
  },
  methods: {
    checkInputs () {
      if (this.gericht.id && this.gericht.name && this.gericht.beschreibung && this.gericht.preis) {
        this.submitButtonText = 'Put'
      } else if (this.gericht.name && this.gericht.beschreibung && this.gericht.preis) {
        this.submitButtonText = 'Post'
      } else if (this.gericht.id && !this.gericht.name && !this.gericht.beschreibung && !this.gericht.preis) {
        this.submitButtonText = 'Delete'
      } else {
        this.submitButtonText = 'Submit'
      }
    },
    async submitForm () {
      if (this.gericht.id && !this.gericht.name && !this.gericht.beschreibung && !this.gericht.preis) {
        try {
          const response = await axios.delete('http://localhost:8080/api/v1/gerichte/' + this.gericht.id)
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      if (this.gericht.id === '') {
        try {
          const response = await axios.post('http://localhost:8080/api/v1/gerichte', this.gericht)
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      } else {
        try {
          const response = await axios.put('http://localhost:8080/api/v1/gerichte/' + this.gericht.id, this.gericht)
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
