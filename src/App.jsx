import React from "react";
import CreateArticle from "./components/CreateArticle";
import DisplayHeader from "./components/Header";
import Login from './components/Login';
import { connect } from "react-redux";

const App = props => {
  return (
    <>
      <DisplayHeader />
      {props.showLogin && <Login />}
      <CreateArticle />
    </>
  );
};

const mapStateToProps = state => {
  return {
    showLogin: state.showLogin,
  };
};

export default connect(mapStateToProps)(App);
