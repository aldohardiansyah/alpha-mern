import React from "react"
import { Button, Gap, Input, Textarea, Upload } from "../../../components"
import "./createNotes.scss"

const CreateNotes = () => {
    return (
        <div className="content-wrapper create-notes-wrapper">
            <p className="page-title">Creat New Notes</p>
            <Input label="Notes Title"></Input>
            <Gap height={20}></Gap>
            <Upload></Upload>
            <Gap height={20}></Gap>
            <Textarea></Textarea>
            <Gap height={20}></Gap>
            <div className="button-action">
                <Button label="Save Notes"></Button>
            </div>
        </div>
    )
}

export default CreateNotes
