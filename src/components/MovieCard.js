import React, { Component } from "react";
import { fetchShowById } from "../components/apicaller";
import "../styles/moviecardstyle.css";

let showInfo = [];

export class MovieCard extends Component {
  state = { movieInfo: "" };

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.movieId !== this.props.movieId) {
      showInfo = await fetchShowById(this.props.movieId);
      this.setState({ movieInfo: showInfo });
      console.log(this.state.movieInfo);
    }
  }

  render() {
    if (this.props.movieId) {
      let name = this.state.movieInfo.name;
      let image = this.state.movieInfo.image
        ? this.state.movieInfo.image.original
        : require("../images/error-image.png");
      let rating = this.state.movieInfo.rating
        ? this.state.movieInfo.rating
        : undefined;
      let summary = this.state.movieInfo.summary
        ? this.state.movieInfo.summary.toString().replace(/<[^>]*>/g, "")
        : "Summary not found!";
      let schedule = this.state.movieInfo.schedule
        ? this.state.movieInfo.schedule
        : undefined;
      let network = this.state.movieInfo.network
        ? this.state.movieInfo.network
        : undefined;
      let language = this.state.movieInfo.language
        ? this.state.movieInfo.language
        : undefined;

      let writtenSchedule = "";
      let writtenScheduleTime;
      if (!schedule || schedule.days.length == 0) {
        writtenSchedule = "Schedule not found!";
      } else {
        schedule.days.forEach((day, key) => {
          writtenSchedule += day + ", ";
        });
        writtenSchedule = writtenSchedule.substr(0, writtenSchedule.length - 2);
        writtenScheduleTime = schedule.time ? " - " + schedule.time : "";
      }

      let writtenNetwork = "";
      if (!network) {
        writtenNetwork = "Network not found!";
      } else {
        if (!network.name) {
          writtenNetwork = "network name not found - ";
        } else {
          writtenNetwork = network.name + " - ";
        }
        if (!network.country.name) {
          writtenNetwork += "country not found";
        } else {
          writtenNetwork += network.country.name;
        }
      }

      let writtenRating = "";
      if (!rating || !rating.average) {
        writtenRating = "Average rating not found!";
      } else {
        writtenRating = rating.average + " / 10";
      }

      return (
        <div className="media mediacard">
          <img src={image} className="rounded cardimg" />
          <div className="media-body textwall">
            <div className="card max">
              <div className="card-body overflow-auto">
                <h5 className="font-weight-bold">{name}</h5>
                <h6 className="font-weight-bold">Summary: </h6>
                {summary}
              </div>
            </div>
            <div className="card min">
              <div className="card-body overflow-auto">
                <h6 className="font-weight-bold ">Rating: </h6>
                {writtenRating}
              </div>
            </div>
            <div className="card min">
              <div className="card-body overflow-auto">
                <h6 className="font-weight-bold">Schedule: </h6>
                {writtenSchedule}
                {writtenScheduleTime}
              </div>
            </div>
            <div className="card min">
              <div className="card-body overflow-auto">
                <h6 className="font-weight-bold">Network: </h6>
                {writtenNetwork}
              </div>
            </div>
            <div className="card min">
              <div className="card-body overflow-auto">
                <h6 className="font-weight-bold">Language: </h6>
                {language}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default MovieCard;
