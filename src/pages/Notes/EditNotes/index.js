import React from "react"
import { useHistory } from "react-router-dom"
import { Link, Button, Gap, Input, Textarea, Upload } from "../../../components"
import "./editNotes.scss"

const EditNotes = () => {
    const history = useHistory()
    return (
        <div className="content-wrapper create-notes-wrapper">
            <p className="page-title">Edit Notes</p>
            <Input label="Notes Title"></Input>
            <Gap height={20}></Gap>
            <Upload></Upload>
            <Gap height={20}></Gap>
            <Textarea></Textarea>
            <Gap height={20}></Gap>
            <div className="button-action">
                <Link
                    onClick={() => history.push("/")}
                    title="Back to Home"
                ></Link>

                <Button label="Save Notes"></Button>
            </div>
        </div>
    )
}

export default EditNotes
