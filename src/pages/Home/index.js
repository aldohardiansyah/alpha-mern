import React from "react"
import { useHistory } from "react-router-dom"
import { Button, Gap, NotesItem } from "../../components"
import "./home.scss"

function Home() {
    const history = useHistory()
    return (
        <div className="content-wrapper">
            <div className="home-wrapper">
                <div className="create-wrapper">
                    <Button
                        label="Create Notes"
                        onClick={() => history.push("/create-notes")}
                    ></Button>
                </div>
                <Gap height={20}></Gap>
                <div className="notes-list-wrapper">
                    <NotesItem></NotesItem>
                    <NotesItem></NotesItem>
                    <NotesItem></NotesItem>
                    <NotesItem></NotesItem>
                </div>
                <div className="pagination-wrapper">
                    <Button label="Previous"></Button>
                    <Gap width={20}></Gap>
                    <Button label="Next"></Button>
                </div>
            </div>
        </div>
    )
}

export default Home
