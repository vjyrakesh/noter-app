import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";

function HeaderComponent(props) {

    function handleLogout() {
        AuthenticationService.deRegisterUser()
        .then(response => {
            sessionStorage.removeItem("authUser")
            props.history.push("/logout")
        })
        .catch(response => {
            console.log("logout")
            console.log(response)
        })
    }
    const isUserLoggedIn = AuthenticationService.isUserAuthenticated()
    console.log("isUserLoggedIn: " + isUserLoggedIn)
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div><a className="navbar-brand" href="http://localhost:3000">Noter</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-item"><Link to="/notes" className="nav-link">Notes</Link></li>}
                        
                    </ul>
                    {/* {isUserLoggedIn && 
                    <div className="container-fluid">
                        <form className="d-flex search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                    } */}
                    
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn &&<li className="nav-item"><Link to="/notes/new" className="btn btn-primary">Add</Link></li>}
                        {isUserLoggedIn && <li className="nav-item"><Link to="/logout" className="nav-link" onClick={handleLogout}>Logout</Link></li>}
                        
                        </ul>
                    
                    
                </div>
                
                
            </nav>
        </header>
        
    )
}

const HeaderWithRouter = withRouter(HeaderComponent)
export default HeaderWithRouter

