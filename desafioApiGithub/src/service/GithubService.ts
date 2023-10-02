import axios from "axios";

const url = "https://api.github.com/users"

export function findUser(user: string){
    return axios.get(url + "/"+ user)
}