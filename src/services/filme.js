import { http } from './config'

export default {

    listar:() => {
        return http.get('filme/')
    },
    salvar:(flime)=>{
        return http.post('filme/create/',flime
        )
    },
    atualizar:(filme)=>{
        return http.put('filme/edit/'+filme.codigo,filme)
    },
    delete:(filme)=>{
        return http.delete('filme/delete/'+filme.codigo)
    }

}