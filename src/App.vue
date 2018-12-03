<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6">
        <TableUsers/>
      </div>
    </div>
    
  </div>
</template>

<script>
import TableUsers from './components/TableUsers.vue'

export default {
  name: 'app',
  components: {
    TableUsers
  }
}
</script>

<style>

</style>
