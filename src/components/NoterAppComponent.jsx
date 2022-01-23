import NoteListComponent from "./NoteListComponent"
import NoteDetailsComponent from "./NoteDetailsComponent"
import NewNoteComponent from "./NewNoteComponent"
import HeaderComponent from "./HeaderComponent"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TagListComponent from "./TagListComponent"
import UpdateNoteComponent from "./UpdateNoteComponent"
import LoginComponent from "./LoginComponent"


export default function NoterAppComponent() {
    return (
        <div>
            <Router>
                <>
                    <HeaderComponent/>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <TagListComponent/>
                            </div>
                            <div className="col-10">
                            <Switch>
                                <Route path="/login" component={LoginComponent}/>
                                <Route path="/notes/new" component={NewNoteComponent}/>
                                <Route path="/notes/:id/update" component={UpdateNoteComponent}/>
                                <Route path="/notes/:id" component={NoteDetailsComponent}/>
                                <Route path="/notes" component={NoteListComponent}/>
                                <Route component={NoteListComponent}/>
                            </Switch>            
                            </div>
                        </div>

                    </div>
                </>
            </Router>
        </div>
    )
}