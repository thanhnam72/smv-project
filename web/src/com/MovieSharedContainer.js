import React, { Component } from 'react';

class MovieShared extends Component {

  render() {
    return (
      <fieldset>
        <legend className="shared-label">Share a Youtube movie</legend>
        <form>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-3 col-form-label">Youtube URL:</label>
            <div class="col-sm-7">
              <div>
                <input type="text" className="form-control" value="email@example.com" id="staticEmail" />
              </div>
              <div>
                <button type="button" class="btn btn-primary share-btn">Share</button>
              </div>
            </div>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default MovieShared;