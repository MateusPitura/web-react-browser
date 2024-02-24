import { USER_LOGADO } from "../constant.tsx"
import { get } from "./localStorage.tsx"

export const getUserLocal = () => {

    const userLogado = get(USER_LOGADO)
    if(userLogado.length !== 0){
        console.log(userLogado)
        return userLogado
    } else {
        return false
    }
}