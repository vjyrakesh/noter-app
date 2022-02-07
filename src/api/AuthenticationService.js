import axios from "axios"

class AuthenticationService {

    interceptor = null

    login(username, password) {
        console.log("username: " + username + ", password: " + password)
        const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        
        return axios.post("http://localhost:8080/login", {username}, {headers: {'Authorization': basicAuthHeader}})
    }

    registerUser(username, password) {
        sessionStorage.setItem("authUser", username)
        const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        this.setupAxiosInterceptor(basicAuthHeader)
    }

    deRegisterUser() {
        if(this.interceptor)
            console.log("interceptor not null")
        axios.interceptors.request.eject(this.interceptor)
        return axios.post("http://localhost:8080/logout")
    }

    isUserAuthenticated() {
        let user = sessionStorage.getItem("authUser")
        if(user === null)
            return false
        return true
    }

    setupAxiosInterceptor(basicAuthHeader) {
        this.interceptor = axios.interceptors.request.use(
            (config) => {
                if(this.isUserAuthenticated())
                    config.headers.authorization = basicAuthHeader
                return config
            }
        )
    }

    signUp(firstName, lastName, username, password) {
        return axios.post("http://localhost:8080/register",{firstName,lastName,username,password})
    }
}

export default new AuthenticationService()