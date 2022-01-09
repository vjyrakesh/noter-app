import NoteListComponent from "./NoteListComponent"
import NoteDetailsComponent from "./NoteDetailsComponent"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export default function NoterAppComponent() {
    return (
        <div>
            Welcome to Noter
            <Router>
                <>
                    <Switch>
                        <Route path="/notes/:id" component={NoteDetailsComponent}/>
                        <Route path="/notes" component={NoteListComponent}/>
                        <Route component={NoteListComponent}/>
                    </Switch>
                </>
            </Router>
        </div>
    )
}