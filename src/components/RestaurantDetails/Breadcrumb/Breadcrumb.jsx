import React from "react";
import './Breadcrumb.styles.scss'
import { Link } from "react-router-dom";

export const Breadcrumb = ({ name }) => {
  return (
    <div className="breadcrumb-conatiner">
      <Link to="/">
        <span>Home / </span>
      </Link>
      <span>Bangalore / </span>
      <span>Jayanagar / </span>
      <span className="res-name">{name}</span>
    </div>
  );
};
