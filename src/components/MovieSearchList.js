import React, { Component } from "react";
import { fetchMoviesByName } from "./apicaller";

import "../styles/listindexstyle.css";

let elements = [];
let filteredResults = [];

export class MovieSearchList extends Component {
  state = { movieList: [] };

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.searchTerm !== this.props.searchTerm) {
      const term = this.props.searchTerm;
      const showsData = await fetchMoviesByName(term);
      filteredResults = [];
      showsData.forEach((item, key) => {
        filteredResults.push({
          name: item.show.name,
          id: item.show.id,
          image: item.show.image
            ? item.show.image.original
            : require("../images/error-image.png")
        });
      });
      this.setState({ movieList: filteredResults });
    }
  }

  render() {
    elements = [];
    if (this.state.movieList.length === 0) {
      return <div>Empty search</div>;
    } else {
      this.state.movieList.forEach((item, key) => {
        elements.push(
          <a
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center show-index"
            data-toggle="list"
            role="tab"
            onClick={this.props.movieClicked.bind(this, item.id)}
          >
            {item.name}
            <div className="image-parent">
              <img src={item.image} className="img-fluid rounded" />
            </div>
          </a>
        );
      });
      return (
        <div className="list-group mt-1" id="list-tab" role="tablist">
          {elements}
        </div>
      );
    }
  }
}

export default MovieSearchList;
