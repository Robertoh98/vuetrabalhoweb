<template>
  <div class="container-fluid">
    <div id="users">
      <h1><center>Usuários no Sistema</center></h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <td>Cód.</td>
            <td>Nome</td>
            <td>Telefone</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente of clientes" :key="cliente.codigo">
            <td> {{ cliente.codigo }} </td>
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.telefone }}</td>
            <td><button type="button" @click="editar(cliente)"><i class="fa fa-edit"></i></button>
              <button type="button" @click="excluir(cliente)"><i class="fa fa-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <form @submit.prevent="salvar" class="form-inline">
      <div class="form-group">
        <input type="text" v-model="cliente.nome" placeholder="Nome" class="form-control margin">
      </div>
      <div class="form-group">
        <input type="text" v-model="cliente.telefone" placeholder="tel" class="form-control margin">
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
  import Cliente from '../services/cliente'

  export default {
      data(){
          return {
            cliente:{
              nome:'',
              telefone:''
            },
            clientes:[]
          }
      },
      mounted(){
        this.listar()
      },
      methods:{
          listar(){
              Cliente.listar().then(response => {
                  this.clientes = response.data
              })
          },
          salvar(){
              if(!this.cliente.codigo) {
                  Cliente.salvar(this.cliente).then(response => {
                      alert("Usuário " + response.data.nome + " salvo com sucesso!!")
                  })
              }else{
                  Cliente.atualizar(this.cliente).then(response => {
                      alert("Usuário " + response.data.nome + " atualizado com sucesso!!")
                  })
              }
              this.cliente = {}
              this.listar();
          },
          editar(cliente){
              this.cliente = cliente
          },
          excluir(cliente){
              Cliente.delete(cliente).then(alert('Excluido com sucesso!'))
              this.listar();
          }
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .margin{
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
