import React from "react"
import "./mainApp.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header, Footer } from "../../components"
import Home from "../Home"
import CreateNotes from "../Notes/CreateNotes"
import DetailNotes from "../Notes/DetailNotes"
import EditNotes from "../Notes/EditNotes"

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header></Header>
            <div className="body-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-notes">
                            <CreateNotes></CreateNotes>
                        </Route>
                        <Route path="/detail-notes">
                            <DetailNotes></DetailNotes>
                        </Route>
                        <Route path="/edit-notes">
                            <EditNotes></EditNotes>
                        </Route>
                        <Route path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainApp
