<template>
  <div>
    <GerichtComponent />
    <GerichtPostPutDeleteComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import GerichtComponent from '@/components/GerichtComponent'
import GerichtPostPutDeleteComponent from '@/components/GerichtPostPutDeleteComponent'

export default {
  name: 'MenuView',
  components: {
    GerichtComponent,
    GerichtPostPutDeleteComponent
  }
}
</script>
