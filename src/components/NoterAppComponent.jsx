import NoteListComponent from "./NoteListComponent"
import NoteDetailsComponent from "./NoteDetailsComponent"
import NewNoteComponent from "./NewNoteComponent"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TagListComponent from "./TagListComponent"
import UpdateNoteComponent from "./UpdateNoteComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import HeaderWithRouter from "./HeaderComponent"
import AuthenticatedRoute from "./AuthenticatedRoute"
import RegisterComponent from "./RegisterComponent"



export default function NoterAppComponent() {
    
    return (
        <div>
            <Router>
                <>
                    <HeaderWithRouter/>
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-2">
                                
                            </div>
                            <div className="col-10"> */}
                            <Switch>
                                <Route path="/login" component={LoginComponent}/>
                                <Route path="/register" component={RegisterComponent}/>
                                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                                <AuthenticatedRoute path="/notes/new" component={NewNoteComponent}/>
                                <AuthenticatedRoute path="/notes/:id/update" component={UpdateNoteComponent}/>
                                <AuthenticatedRoute path="/notes" component={NoteListComponent}/>
                                <Route path="/" component={LoginComponent}/>
                            </Switch>            
                            {/* </div>
                        </div> */}

                    </div>
                </>
            </Router>
        </div>
    )
}