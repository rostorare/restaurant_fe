<template xmlns:onclick="http://www.w3.org/1999/xhtml">
  <div className="container">
    <h1 className="text-center"> Gerichte </h1>
    <table className="table table-striped">
      <thead>
      <th> Gericht Id</th>
      <th> Gericht Name</th>
      <th> Gericht Beschreibung</th>
      <th> Gericht Preis</th>
      </thead>
      <tbody>
      <tr v-for="gericht in gerichte" v-bind:key="gericht.id">
        <td> {{ gericht.id }}</td>
        <td> {{ gericht.name }}</td>
        <td> {{ gericht.beschreibung }}</td>
        <td> {{ gericht.preis }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <button type="button" v-on:click="getGerichte" className="btn btn-primary">Get</button>
</template>

<script>
import GerichtService from '@/services/GerichtService'

export default {
  name: 'GerichtComponent',
  data () {
    return { gerichte: [] }
  },
  methods: {
    getGerichte () {
      GerichtService.getGerichte().then((response) => {
        this.gerichte = response.data
      })
    }
  },
  created () {
    this.getGerichte()
  }
}
</script>

<style scoped>

</style>
