import { Children, useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import "./CSS/TodoApp.css"
import ListTodoComponents from "./ListTodoComponents";
import LoginComponents from "./LoginComponents";
import WelcomeComponents from "./WelcomeComponents";
import LogoutComponents from "./LogoutComponents";
import ErrorComponents from "./ErrorComponents";
import HeaderComponents from "./HeaderComponents";
import TodoComponent from "./TodoComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider, { useAuth } from "./security/AuthContext";
const AuthenticatedRoute = ({children}) => {
    if (useAuth().isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/" />
    }
}

function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponents />
                    <Routes>
                        <Route path="/" element={<LoginComponents />} />
                        <Route path="/login" element={<LoginComponents />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponents />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/todo" element={
                            <AuthenticatedRoute>
                                <ListTodoComponents />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponents />
                            </AuthenticatedRoute>
                        } />

                        <Route path="/todo/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>
                        } />
                        {/* <Route path="/addNew" element={
                            <AuthenticatedRoute>
                                <AddTodoComponent />
                            </AuthenticatedRoute>
                        } /> */}
                        

                        <Route path="*" element={<ErrorComponents />} />
                    </Routes>

                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

// const FooterComponents = () => {
//     return (
//         <footer className="footer">
//             <div className="container">
//                 <center>
//                 Fotter
//                 </center>
//             </div>
//         </footer>
//     )
// }

export default TodoApp;