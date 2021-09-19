import React, { Component } from 'react';

class TopNavigation extends Component {

  render() {
    return (
      <div className="row top-nav">
        <div className="col-md-4 left-top-navigation">
          <span><i className="fa fa-home"></i></span>
          <span>Funny Movies</span>
        </div>
        <div className="col-md-8 right-top-navigation text-right">
          <form className="form-inline">
            <div className="form-group mb-2 mgr-10">
              <label htmlFor="staticEmail2" className="sr-only">Email</label>
              <input className="text" className="form-control" id="staticEmail2" />
            </div>
            <div className="form-group mx-sm-3 mb-2 mgr-10">
              <label htmlFor="inputPassword2" className="sr-only">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="button" className="btn btn-primary mb-2">Login/Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TopNavigation;