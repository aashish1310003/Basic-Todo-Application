import React, {useContext} from 'react'
import {Link } from "react-router-dom"
import { AuthContext, useAuth } from './security/AuthContext'
import LogoutComponents from './LogoutComponents';
const HeaderComponents = () => {
    
    const auth = useAuth(AuthContext);
    console.log(auth);
    const isAuthenticated = auth.isAuthenticated;

        // const authContext = useContext(AuthContext);
        // console.log(authContext.number);
    
    return (

               <header className="border-bottom border-light border-5 mb-5 p-2">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.aashish.com">Aashish</a>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav">
                                        {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/aashiq">Home</Link></li>}
                                        {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todo">Todos</Link></li>}
                                    </ul>
                                </div>
                                <ul className="navbar-nav">
                                    {!isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                                    {isAuthenticated &&<li className="nav-item fs-5"><Link className="nav-link" to="/login" onClick={<LogoutComponents />}>Logout</Link></li>}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

    )
}

export default HeaderComponents