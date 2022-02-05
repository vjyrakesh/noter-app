import axios from "axios"

class AuthenticationService {

    login(username, password) {
        const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        this.setupAxiosInterceptor(basicAuthHeader)
        return axios.post("http://localhost:8080/login", {username})
    }

    registerUser(username) {
        sessionStorage.setItem("authUser", username)
    }

    deRegisterUser() {
        return axios.get("http://localhost:8080/logout")
        
        
    }

    isUserAuthenticated() {
        let user = sessionStorage.getItem("authUser")
        if(user === null)
            return false
        return true
    }

    setupAxiosInterceptor(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserAuthenticated())
                    config.headers.authorization = basicAuthHeader
                return config
            }
        )
    }
}

export default new AuthenticationService()