import React, { Component } from "react";
import "./styles/Map.css";

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <div class="container">
          <div class="header">
            <nav class="navbar navbar-expand-sm  fixed-top navbar-light bg-light">
              <ul class="navbar-nav">
                <li>
                  <a href="#">Find</a>
                  </li>
                  <li>
                  <a href="#">Share</a>
                </li>
                <li>
                  <a href="#">More</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
              {/* <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
              {/* </div> */}
              {/* </div> */}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
