<template>
  <div class = "container">
    <h1 class = "text-center"> Gerichte </h1>
    <table class = "table table-striped">
      <thead>
      <th> Gericht Id</th>
      <th> Gericht Name </th>
      <th> Gericht Beschreibung </th>
      <th> Gericht Preis</th>
      </thead>
      <tbody>
      <tr v-for = "gericht in gerichte" v-bind:key = "gericht.id">
        <td> {{gericht.id}} </td>
        <td> {{gericht.name}} </td>
        <td> {{gericht.beschreibung}} </td>
        <td> {{gericht.preis}} </td>
      </tr>
      </tbody>
    </table>
  </div>
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
