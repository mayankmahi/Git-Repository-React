import React from "react";
import { Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function RepoCard({ repo }) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`./${repo.full_name}/issue/`)}
      style={{
        cursor: "pointer",
        marginBottom: "10px",
        border: "1px solid grey",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
      }}
    >
      <h3 style={{padding: "5px", color: "blue"}}>{repo.name}</h3>
      <h5 style={{padding: "5px", color: "black"}}>{repo.full_name}</h5>
      <p style={{padding: "5px"}}>{repo.description}</p>
      <div
       style={{
        padding: "2px"
      }}>
        <Badge pill variant="primary">
          {repo.language}
        </Badge>
      </div>
    </div>
  );
}

export default RepoCard;
