import { Link } from "react-router-dom"

export default function LogoutComponent() {
    return (
        <div className="container col-4 my-3">
            <h3>You've been logged out!</h3>
            <p>Click <Link to="/login">here</Link> to login again.</p>
        </div>
    )
}