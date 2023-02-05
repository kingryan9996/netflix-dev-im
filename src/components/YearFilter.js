import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import { movieAction } from "../redux/actions/movieAction";

const STEP = 1;
const MIN = 2021;
const MAX = 2023;
class YearFilter extends Component {
  state = {
    values: [2023],
  };

  render() {
    const { popularMovies } = this.props;
    console.log(popularMovies.results);
    console.log(popularMovies.results[0].release_date.substr(0, 4));
    // let yearFilter = popularMovies.results[0].release_date.substr(0, 4);
    let yearFilter = popularMovies.results.filter(
      (item) => item.release_date.substr(0, 4) == this.state.values[0]
    );
    console.log(yearFilter, "필터링");

    // this.setState(yearFilter);
    console.log(this.state.values[0]);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em",
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />

        <output style={{ marginTop: "30px" }} id="output">
          {this.state.values[0]}
        </output>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default YearFilter;
