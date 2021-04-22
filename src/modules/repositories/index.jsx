import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import RepoCard from "../../components/repo-card";
import SearchBox from "../../components/search-box";
import { searchRepo } from "./repoSlice";

class Repo extends React.Component {
  componentDidMount() {
    this.props.searchRepo({ query: "react", limit: 10, page: 1 });
  }

  onSearch = (query) => {
    this.props.searchRepo({ query, limit: 10, page: 1 });
  };

  render() {
    return (
      <Container>
        <Row className="full-width d-flex justify-content-center">
          <SearchBox
            onSearch={this.onSearch}
            isLoading={this.props.repos.status === "loading"}
          />
        </Row>
        <div>
          {this.props.repos.status === "loading" ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            this.props.repos.data.items?.map((repo) => <RepoCard repo={repo} />)
          )}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};

const mapDispatchToprops = {
  searchRepo,
};

export default connect(mapStateToProps, mapDispatchToprops)(Repo);
