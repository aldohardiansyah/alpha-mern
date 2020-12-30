import React from "react"
import { useHistory } from "react-router-dom"
import { LoginBg } from "../../../assets"
import { Gap, Link, Button } from "../../../components"

import "./detailNotes.scss"

const DetailNotes = () => {
    const history = useHistory()
    return (
        <div className="content-wrapper detail-notes-wrapper">
            <img src={LoginBg} className="note-image" alt="previewImage"></img>
            <Gap height={20}></Gap>
            <p className="title">Title Note</p>
            <p className="author">Author Note | 12/12/2020</p>
            <Gap height={20}></Gap>
            <p className="body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
            <Gap height={20}></Gap>
            <div className="button-action">
                <Link
                    onClick={() => history.push("/")}
                    title="Back to Home"
                ></Link>

                <Button
                    label="Edit Notes"
                    onClick={() => history.push("/edit-notes")}
                ></Button>
            </div>
            <Gap height={40}></Gap>
        </div>
    )
}

export default DetailNotes
