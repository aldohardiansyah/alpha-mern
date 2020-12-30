import React from "react"
import { useHistory } from "react-router-dom"
import { RegisterBg } from "../../../assets"
import { Button, Gap } from "../../atoms"
import "./notesItem.scss"

const NotesItem = () => {
    const history = useHistory()
    return (
        <div className="notes-item-wrapper">
            <img src={RegisterBg} alt="notesImage" className="img-thumb"></img>
            <div className="content-detail">
                <p className="title">Title Note</p>
                <p className="author">Author Note</p>
                <p className="body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <Gap height={20}></Gap>
                <div className="button-action">
                    <Button
                        label="View Detail"
                        onClick={() => history.push("/detail-notes")}
                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default NotesItem
