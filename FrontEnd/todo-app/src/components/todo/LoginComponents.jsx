import React from 'react'
import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate, useParams, Link } from "react-router-dom"
import { useAuth } from './security/AuthContext';
const LoginComponents = () => {
    const [username, setUsername] = useState("aashiq");
    const [password, setPassword] = useState("pushpa");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorsMessage] = useState(false);
    const authContext = useAuth()
    const navigate = useNavigate()
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = async () => {
        const success = await authContext.login(username, password);
        if (success) {
            setShowSuccessMessage(true);
            setShowErrorsMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowSuccessMessage(false);
            setShowErrorsMessage(true);
        }
    }
     
    // const SuccessMessageComponent = () => {
    //     if (showSuccessMessage) {
    //         return 
    //     } return null;
    // }
    // const ErrorMessageComponent = () => {
    //     if (showErrorMessage) {
    //         return 
    //     } return null;
    // }
    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="successMessage"></div>
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={handlePassword} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponents
