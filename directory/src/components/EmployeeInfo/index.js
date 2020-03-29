import React from "react";
import "./style.css";

function EmpInfo(props) {
  return (
    <div className="card">
      <h5 className="card-header"><strong>Name:</strong> {props.name}</h5>
      <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body">
        <p className="card-text"><strong>Occupation:</strong> {props.department}</p>
        <p className="card-text"><strong>Employment Type:</strong> {props.empType}</p>
      </div>
      </div>
      </div>
    
  );
}

export default EmpInfo;