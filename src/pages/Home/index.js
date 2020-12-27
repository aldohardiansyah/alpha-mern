import React from "react";
import { Button, NotesItem } from "../../components";
import "./home.scss";

function Home() {
  return (
    <div className="content-wrapper">
      <div className="home-wrapper">
        <div className="create-wrapper">
          <Button label="Create Notes"></Button>
        </div>
        <div className="notes-list-wrapper">
          <NotesItem></NotesItem>
          <NotesItem></NotesItem>
          <NotesItem></NotesItem>
          <NotesItem></NotesItem>
        </div>
        <div className="pagination-wrapper">
          <p>Pagination</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
