import React from 'react'
import { useParams, Link } from "react-router-dom"

import { useState } from 'react';
import { retriveHelloWorldBean, retriveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

const WelcomeComponents = () => {

    const { username } = useParams();
    const [message, setMessage] = useState(null)
    const auth = useAuth()
    const callHelloWorldRestApi = () => {
        console.log("welcome")
        

        retriveHelloWorldBean(auth.token)
            // axios.get("http://localhost:8080/hello-world-bean")
            .then(
                (response) => successResponse(response)
            )
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean-up"))

        retriveHelloWorldPathVariable("Aashiq", auth.token)
            // axios.get("http://localhost:8080/hello-world-bean")
            .then(
                (response) => successResponse(response)
            )
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean-up"))

    }
    
    const successResponse = (response) => {
        setMessage(response.data.message)
        console.log(response.data.message)
    }
    const errorResponse = (error) => {
        console.log(error)
    }


    return (
        <div className="WelcomeComponents">
            <h1>Welcome to great {username} page</h1>
            <div>its time to welcome u all</div>
            <div>Your Todo. <Link to="/todo">Go there</Link></div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomeComponents