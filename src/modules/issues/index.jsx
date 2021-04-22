import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getIssue } from "./issueSlice";
import { withRouter } from "react-router-dom";
import IssueCard from "../../components/issue-card";

class Issues extends React.Component {
  constructor(props) {
    console.log("issue module is mounted");
    super(props);
    this.state = {
      fullName: `${this.props.match.params.owner}/${this.props.match.params.repo}`,
    };
  }
  componentDidMount() {
    this.props.getIssue({
      repoFullName: this.state.fullName,
      limit: 10,
      page: 1,
    });
  }

  // onSearch = (query) => {
  //   this.props.searchRepo({ query, limit: 10, page: 1 });
  // };

  render() {
    console.log(this.props.issues);
    return (
      <Container>
        <Row className="full-width d-flex justify-content-center">
          <div>
            {this.props.issues.status === "loading" ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              this.props.issues.data?.map((issue) => (
                <IssueCard issue={issue} key={issue.id} />
              ))
            )}
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
  };
};

const mapDispatchToprops = {
  getIssue,
};

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(Issues));
