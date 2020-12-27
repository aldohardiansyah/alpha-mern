import React from "react";
import { Button, Gap, Input, Upload } from "../../../components";
import "./createNotes.scss";

const CreateNotes = () => {
  return (
    <div className="content-wrapper create-notes-wrapper">
      <p>Creat New Notes</p>
      <Input label="Notes Title"></Input>
      <Gap height={20}></Gap>
      <Upload></Upload>
      <Gap height={20}></Gap>
      <textarea></textarea>
      <Gap height={20}></Gap>
      <Button label="Save Notes"></Button>
    </div>
  );
};

export default CreateNotes;
