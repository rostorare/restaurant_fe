<template>
  <form  @submit.prevent="submitForm">
    <div class="row">
      <div class="col">
        <label>Id</label>
        <input type="text" class="form-control" id="id" v-model="gericht.id">
      </div>
           <div class="col">
        <label>Name</label>
        <input type="text" class="form-control" id="name" v-model="gericht.name">
      </div>
      <div class="col">
        <label>Beschreibung</label>
        <input type="text" class="form-control" id="beschreibung" v-model="gericht.beschreibung">
      </div>
      <div class="col">
        <label>Preis</label>
        <input type="text" class="form-control" id="preis" v-model="gericht.preis">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
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
      }
    }
  },
  methods: {
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
