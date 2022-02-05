import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";

export default function AuthenticatedRoute(props) {
    if(AuthenticationService.isUserAuthenticated())
        return <Route {...props}/>
    else
        return <Redirect to="/login"/>

}