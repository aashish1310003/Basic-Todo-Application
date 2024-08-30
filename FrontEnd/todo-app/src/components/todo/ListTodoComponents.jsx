import React, { useEffect, useState } from 'react'
import { deleteTodoApi, retriveAllTodosForUsername } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'
import { useNavigate } from 'react-router-dom'

const ListTodoComponents = () => {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate())
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    // const todos = [
    //     // { id: 1, description: 'Learn-AWS', done: false, targetDate: targetDate },
    //     // { id: 2, description: "spring", done: false, targetDate: targetDate },
    //     // { id: 3, description: "spring boot", done: false, targetDate: targetDate }
    // ]

    useEffect(
        () => refreshTodos(), []
    )

    const refreshTodos = () => {
        retriveAllTodosForUsername(username)
            .then(response => {
                console.log(response.data)
                if(response.data != null)setTodos(response.data)
            })
            .catch(error => console.log(error))

    }

    const deleteTodo = (id) => {
        deleteTodoApi(username, id)
        .then(
            () =>{
                setMessage(`Delete of todo with ${id} successfull`)
                refreshTodos()
            }
        ).catch(error => console.log(error))

        console.log("delete" + id)
     }

     const updateTodo = (id) =>{
        navigate(`/todo/${id}`)
     }
     const addTodo = () =>{
        navigate('/addNew');
     }

    return (
        <div className="ListTodoComponents container">
            <h1>Thing you want to To Do!</h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                            <th>Delete </th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className='btn btn-warning' onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className='btn btn-success' onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>

                                )
                            )
                        }
                    </tbody>
                </table>
                
            </div>
            <dir className="btn btn-success m-5" onClick={()=>updateTodo(-1)}> Add Todo</dir>
        </div>
    )
}

export default ListTodoComponents