import React from "react"
import { LoginBg } from "../../../assets"
import { Gap } from "../../../components"

import "./detailNotes.scss"

const DetailNotes = () => {
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
            <Gap height={40}></Gap>
        </div>
    )
}

export default DetailNotes
