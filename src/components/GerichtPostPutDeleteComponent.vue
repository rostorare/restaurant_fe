<template>
  <!-- contains inputform for the gerichte -->
  <div class ="container">
    <form  @submit.prevent="submitForm">
      <div class="row">
        <div class="col">
          <label>Id</label>
          <!-- checkInputs checks if there is a value written inside the field-->
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
      <!-- based on checkinputs () the text changes, based on text the color of the button changes-->
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
    // changes the text of submitbutton
    checkInputs () {
      // if all fields have values
      if (this.gericht.id && this.gericht.name && this.gericht.beschreibung && this.gericht.preis) {
        this.submitButtonText = 'Put'
        // if all fields except Id have values
      } else if (this.gericht.name && this.gericht.beschreibung && this.gericht.preis) {
        this.submitButtonText = 'Post'
        // if only id has a value
      } else if (this.gericht.id && !this.gericht.name && !this.gericht.beschreibung && !this.gericht.preis) {
        this.submitButtonText = 'Delete'
      } else {
        this.submitButtonText = 'Submit'
      }
    },
    // submits the Form, based on the Text of the submitButton
    async submitForm () {
      // submits delete
      if (this.gericht.id && !this.gericht.name && !this.gericht.beschreibung && !this.gericht.preis) {
        try {
          const response = await axios.delete('http://localhost:8080/api/v1/gerichte/' + this.gericht.id)
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      // submits post
      if (this.gericht.id === '') {
        try {
          const response = await axios.post('http://localhost:8080/api/v1/gerichte', this.gericht)
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      } else {
        // submit put
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
