import React from "react";
import { useHistory } from "react-router-dom";
import { Badge } from "react-bootstrap";

function IssueCard({ issue }) {
  const history = useHistory();
  return (
    <>
    
    <div
      onClick={() => history.push(`./${issue.number}`)}
      style={{
        cursor: "pointer",
        margin: "20px",
        border: "1px solid grey",
        'borderRadius' : "10px"
      }}
    >
      <div>
        <h3
        style={{color:"#42a5f5", fontSize:"20px", padding:"5px"}}
        >
        {issue.title}
        </h3>
      </div>
    </div>
    </>
  );
}

export default IssueCard;
