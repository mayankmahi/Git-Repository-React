import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MarkdownGithub from "react-markdown-github";
import { getIssueByNumber } from "../issues/issueSlice";
import { getComments } from "./commentsSlice";
import CommentCard from "../../components/comment-card";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoFullName: `${this.props.match.params.owner}/${this.props.match.params.repo}`,
      issueNumber: this.props.match.params.issueNumber,
    };
  }
  componentDidMount() {
    this.props.getIssueByNumber({
      repoFullName: this.state.repoFullName,
      issueNumber: this.state.issueNumber,
    });
    this.props.getComments({
      repoFullName: this.state.repoFullName,
      issueNumber: this.state.issueNumber,
    });
  }

  // onSearch = (query) => {
  //   this.props.searchRepo({ query, limit: 10, page: 1 });
  // };

  render() {
    return (
      <Container style={{ width: "100vw !important" }}>
        <Row className="full-width d-flex justify-content-center">
          <div style={{ wordWrap: "break-word" }}>
            {this.props.issues.status === "success" ? (
              <>
                <h2>{this.props.issues.currentIssue?.title}</h2>
                <MarkdownGithub source={this.props.issues.currentIssue?.body} />
              </>
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </div>
          <div style={{ wordWrap: "break-word" }}>
            {this.props.comments.status === "success" ? (
              this.props.comments.data.map((comment) => (
                <>
                  
                  <CommentCard comment={comment} key={comment.id} />
                    
                  
                </>
              ))
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    issues: state.issues,
  };
};

const mapDispatchToprops = {
  getIssueByNumber: getIssueByNumber,
  getComments: getComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(withRouter(Comments));
