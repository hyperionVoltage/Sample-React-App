import React, { Component } from "react";

import MovieSearchList from "./MovieSearchList";
import MovieCard from "./MovieCard";

export class Mainview extends Component {
  state = { searchTerm: "", id: "" };

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-4 search">
            <div className="input-group-mb3 flex-d">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={event =>
                  this.setState({ searchTerm: event.target.value })
                }
              />
              <MovieSearchList
                searchTerm={this.state.searchTerm}
                movieClicked={this.movieClicked}
              />
            </div>
          </div>
          <div className="col-8 display">
            <MovieCard movieId={this.state.id} />
          </div>
        </div>
      </div>
    );
  }

  movieClicked = movieId => {
    this.setState({ id: movieId });
  };
}

export default Mainview;
