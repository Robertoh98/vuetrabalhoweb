<template>
    <div class="container">
        <div>
            <h1><center>Filmes Alugados</center></h1>
            <table class="table table-hover">
                <thead>
                <tr>
                    <td>Usuário</td>
                    <td>Filme</td>
                    <td>Data Locação</td>
                    <td>Data Fim</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="alugar of alugueis" :key="alugar.codigo">
                    <td> {{ alugar.cliente.nome }} </td>
                    <td>{{ alugar.filme.titulo }}</td>
                    <td>{{ alugar.dtEmprestimo | dateAjuste }}</td>
                    <td>{{alugar.dtDevolucao|dateAjuste}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <center><form @submit.prevent="salvar" class="form-inline">
            <div class="form-group">
                <input type="text" v-model="alugar.cliente.codigo" placeholder="Código usuário" class="form-control margin">
            </div>
            <div class="form-group">
                <input type="text" v-model="alugar.filme.codigo" placeholder="Código Filme" class="form-control margin">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form></center>
    </div>
</template>

<script>
    import Alugar from '../services/alugar'

    var date = new Date();
    var dd = date.getDate();
    var de = date.getDate()+7;
    var mm = date.getMonth() + 1;

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    var today = date.getFullYear() + '-' + mm + '-' + dd;
    var week = date.getFullYear() + '-' + mm + '-' + de;


    export default {
        data(){
            return {
                alugar:{
                    cliente:{
                        codigo:''
                    },
                    filme:{
                        codigo: ''
                    },
                    dtEmprestimo:today,
                    dtDevolucao:week
                },
                alugueis:[]
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Alugar.listar().then(response => {
                    this.alugueis = response.data
                })
            },
            salvar() {
                if (!this.alugar.id) {
                    Alugar.salvar(this.alugar).then(response => {
                        alert("Aluguel " + response.data.titulo + " salvo com sucesso!!")
                    })
                } else {
                    Alugar.atualizar(this.alugar).then(response => {
                        alert("Filme " + response.data.titulo + " atualizado com sucesso!!")
                    })
                }
                this.alugar = {}
                this.listar();
            }
        },
        filter:{
            dateAjuste:function (data) {
                var date = new Date(data)
                return date.getDate() + '/' + (date.getMonth() + 1) +'/'+date.getFullYear()
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