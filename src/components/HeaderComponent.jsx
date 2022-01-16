import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div><a className="navbar-brand" href="https://localhost:3000">Noter</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/notes" className="nav-link">Notes</Link></li>
                        
                    </ul>
                    <div className="container-fluid">
                        <form className="d-flex search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-item"><Link to="/notes/new" className="btn btn-primary">Add</Link></li>
                    </ul>
                </div>
                
                
            </nav>
        </header>
        
    )
}