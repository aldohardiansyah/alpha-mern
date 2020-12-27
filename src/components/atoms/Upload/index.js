import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";
const Upload = () => {
  return (
    <div className="upload-wrapper">
      <img src={LoginBg} className="preview-image" alt="previewImage"></img>
      <input type="file" className="upload-button"></input>
    </div>
  );
};

export default Upload;
