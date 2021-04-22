import React from 'react'
import MarkdownGithub from "react-markdown-github";


function CommentCard({comment}) {
   
    return (
        <>
          <div 
          style={{  
          marginBottom: "20px",
          border: "1px solid grey",
          padding: "5px",
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          'borderRadius' : "10px"
          }}>
          <MarkdownGithub source={comment.body} />
          </div>  
        </>
    )
}

export default CommentCard;
