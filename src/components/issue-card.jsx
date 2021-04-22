import React from "react";
import { useHistory } from "react-router-dom";

function IssueCard({ issue }) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`./${issue.number}`)}
      style={{
        cursor: "pointer",
        marginBottom: "10px",
        border: "2px solid grey",
      }}
    >
      <div>
        <h3>{issue.title}</h3>
      </div>
    </div>
  );
}

export default IssueCard;
