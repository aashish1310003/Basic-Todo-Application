import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null)
    console.log("AuthProvider is rendering");

    async function login(username, password) {
        const batoken = "Basic " + window.btoa(username + ":" + password);
    
        try {
            const response = await executeBasicAuthenticationService(batoken);
            console.log("API Response Status:", response.status); // Debugging line
            
            if (response.status === 200) {
                setAuthenticated(true);
                setUsername(username);
                setToken(batoken)
                apiClient.interceptors.request.use(
                    (config) =>{
                        console.log("intercepting and adding authorization")
                        config.headers.Authorization=batoken
                        return config;
                    }
                )
                return true;
            } else {
                logout()
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error);
            logout()
            return false;
        }
    }
    

    function logout() {
        setToken('')
        setAuthenticated(false);
        setUsername(null);
    }

    const valueToBeShared = { isAuthenticated, setAuthenticated, login, logout, username, token };

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;




// import { createContext, useContext } from "react";
// import { useState } from "react";
// import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";


// export const AuthContext = createContext()
// export const useAuth = () => useContext(AuthContext);

// function AuthProvider({ children }) {

//     const [isAuthenticated, setAuthenticated] = useState(false);
//     const [username, setUsername] = useState(null);
//     console.log("AuthProvider is rendering");

//     // function login(username, password){
//     //     if (username === 'aashiq' && password === 'pushpa') {
//     //         setAuthenticated(true)
//     //         setUsername(username)
//     //         return true;
//     //     }else{
//     //         setAuthenticated(false)
//     //         setUsername(null)
//     //         return false;
//     //     }    
//     // }

//     async function login(username, password){
//         const  batoken = "Basic "+window.btoa(username + ":" + password)
//         // const  batoken = "Basic anVzcGF5OjIxbGFj"
        
        
//         const response = await executeBasicAuthenticationService(batoken)
//         // .then( response => console.log("success"  ,response))
//         // .catch(error => console.log({"error":error}))
//         if (response.status == 200) {
//             setAuthenticated(true)
//             setUsername(username)
//             return true;
//         }else{
//             setAuthenticated(false)
//             setUsername(null)
//             return false;
//         }    
//     }

//     function logout(){
//         setAuthenticated(false)
//     }
//     const valueToBeShared = {  isAuthenticated, setAuthenticated, login, logout, username}

//     return (
//         <AuthContext.Provider value={valueToBeShared}>
//             {children}
//         </AuthContext.Provider>
//     );
// }



// export default AuthProvider; 