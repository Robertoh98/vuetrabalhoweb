import { http } from './config'

export default {

    listar:() => {
        return http.get('cliente/')
    },
    salvar:(cliente)=>{
        return http.post('cliente/create/',cliente
        )
    },
    atualizar:(cliente)=>{
      return http.put('cliente/edit/'+cliente.codigo,cliente)
    },
    delete:(cliente)=>{
        return http.delete('cliente/delete/'+cliente.codigo)
    }
}