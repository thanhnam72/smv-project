import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MovieListContainer from './MovieListContainer';
import MovieSharedContainer from './MovieSharedContainer';
import TopNavigation from './TopNavigation';
import Popup from 'react-popup';

class MasterPage extends Component {

  render() {
    return (
      <div className="container">
        <Popup />
        <TopNavigation />
        <Switch>
          <Route path="/" exact component={MovieListContainer} />
          <Route path="/share" component={MovieSharedContainer} />
        </Switch>
      </div>
    );
  }
}

export default MasterPage;