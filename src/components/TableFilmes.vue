<template>
    <div class="container-fluid">
        <div id="users">
            <h1><center>Filmes disponíveis</center></h1>
            <table class="table table-hover">
                <thead>
                <tr>
                    <td>Cód.</td>
                    <td>Título</td>
                    <td>Tipo</td>
                    <td>Quantidade</td>
                    <td>Ações</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="filme of filmes" :key="filme.codigo">
                    <td> {{ filme.codigo }} </td>
                    <td>{{ filme.titulo }}</td>
                    <td>{{ filme.tipo }}</td>
                    <td>{{ filme.quantidade }}</td>
                    <td><button type="button" @click="editar(filme)"><i class="fa fa-edit"></i></button>
                        <button type="button" @click="excluir(filme)"><i class="fa fa-trash"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
        <form @submit.prevent="salvar" class="form-inline">
            <div class="form-group">
                <input type="text" v-model="filme.titulo" placeholder="Nome" class="form-control margin">
            </div>
            <div class="form-group">
                <input type="text" v-model="filme.tipo" placeholder="Tipo" class="form-control margin">
            </div>
            <div class="form-group">
                <input type="number" v-model="filme.quantidade" placeholder="Quantidade" class="form-control margin">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
    import Filme from '../services/filme'

    export default {
        data(){
            return {
                filme:{
                  titulo:'',
                  quantidade:'',
                  tipo:''
                },
                filmes:[]
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Filme.listar().then(response => {
                    this.filmes = response.data
                })
            },
            salvar(){
                if(!this.filme.codigo){
                    Filme.salvar(this.filme).then(response => {
                        alert("Filme " + response.data.titulo + " salvo com sucesso!!")
                    })
                }else{
                    Filme.atualizar(this.filme).then(response=>{
                        alert("Filme " + response.data.titulo + " atualizado com sucesso!!")
                    })
                }
                this.filmes = {}
                this.listar();
            },
            editar(filme){
                this.filme = filme
            },
            excluir(filme){
                Filme.delete(filme).then(alert('Excluido com sucesso!'))
                this.listar()
            }
        }
    }
</script>

<style scoped>
    .margin{
        margin-right: 2px;
        margin-left: 2px;
    }
</style>