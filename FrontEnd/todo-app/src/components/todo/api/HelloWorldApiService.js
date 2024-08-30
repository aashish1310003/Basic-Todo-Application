import axios from "axios";
import { apiClient } from "./ApiClient";


export function retriveHelloWorldBean(token){
    return apiClient.get("/hello-world-bean", 
    {headers: {
        Authorization: token
    }});
}

export const retriveHelloWorldPathVariable = (username, token) =>(
     apiClient.get(`/hello-world/path/${username}`, 
        {headers: {
            Authorization: token
        }}
     )
    )

    export const executeBasicAuthenticationService = async (token) => {
        try {
            const response = await apiClient.get("/basicauth", {
                headers: {
                    Authorization: token
                }
            });
            return response;
        } catch (error) {
            // Ensure that we handle and rethrow errors correctly
            if (error.response) {
                return error.response; // Return error response to be handled in login function
            } else {
                throw error; // Re-throw if it's a network or other error
            }
        }
    }
    

// export  default retriveHelloWorldBean;