import axios from "axios";
import { apiClient } from "./ApiClient";

export function retriveAllTodosForUsername (username){
    return apiClient.get(`/users/${username}/todos`)
}

export const deleteTodoApi = (username, id) =>(
     apiClient.delete(`/users/${username}/todos/${id}`)
    )

 export const retrieveTodoApi = (username, id) =>(
        apiClient.get(`/users/${username}/todos/${id}`)
       )

  export const UpdateTodoApi = (username, id,todo) =>(
        apiClient.put(`/users/${username}/todos/${id}`, todo)
       )
 export const addTodoApi = (username,todo) =>(
        apiClient.post(`/users/${username}/todos`, todo)
       )

// export  default retriveHelloWorldBean;