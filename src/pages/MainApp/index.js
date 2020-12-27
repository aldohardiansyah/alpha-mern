import React from "react";
import "./mainApp.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "../../components";
import Home from "../Home";
import CreateNews from "../News/CreateNews";
import DetailNews from "../News/DetailNews";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-news">
              <CreateNews></CreateNews>
            </Route>
            <Route path="/detail-news">
              <DetailNews></DetailNews>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainApp;
