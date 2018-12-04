<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6">
        <TableUsers></TableUsers>
      </div>
      <div class="col-md-6">
        <TableFilmes></TableFilmes>
      </div>
    </div>
    <div class="row margin-bot">
      <TableAlugar></TableAlugar>
    </div>
  </div>
</template>

<script>

import TableUsers from './components/TableUsers.vue'
import TableFilmes from './components/TableFilmes.vue'
import TableAlugar from './components/TableAlugar.vue'

export default {
  name: 'app',
  components: {
    TableUsers,
    TableFilmes,
    TableAlugar
  }
}
</script>

<style>
  .margin-bot{
    margin-top:50px;
  }
</style>
