import { http } from './config'

export default {

    listar:() => {
        return http.get('aluga/')
    },
    salvar:(alugar)=>{
        return http.post('aluga/create/',alugar
        )
    },
    atualizar:(cliente)=>{
        return http.put('aluga/edit/'+cliente.codigo,cliente)
    }
}