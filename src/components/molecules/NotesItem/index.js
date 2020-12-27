import React from "react";
import { RegisterBg } from "../../../assets";
import "./notesItem.scss";

const NotesItem = () => {
  return (
    <div className="notes-item-wrapper">
      <img src={RegisterBg} alt="notesImage" className="img-thumb"></img>
      <div className="content-detail">
        <p className="title">Title Note</p>
        <p className="author">Author Note</p>
        <p className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default NotesItem;
