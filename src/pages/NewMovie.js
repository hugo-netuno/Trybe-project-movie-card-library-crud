
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    return !redirect ? (
      <div data-testid="new-movie">
        <MovieForm
          onSubmit={this.handleSubmit}
          formTitle="New Movie"
          returnPagePath="/"
        />
      </div>
    ) : (<Redirect to="/" />);
  }
}
export default NewMovie;
