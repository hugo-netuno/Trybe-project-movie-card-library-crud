import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movie }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ redirect: true });
  }

  render() {
    const {
      redirect,
      movie } = this.state;
    const { id } = movie;

    if (redirect) return (<Redirect to="/" />);

    return id ? (
      <div data-testid="edit-movie">
        <MovieForm
          movie={movie}
          onSubmit={this.handleSubmit}
          formTitle="Edit Movie"
          returnPagePath={`/movies/${id}`}
        />
      </div>
    ) : (<Loading />);
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default EditMovie;
