import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie as getMovieDetails, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getMovieDetails(match.params.id).then((element) => {
      this.setState({ movie: element });
    });
  }

  render() {
    // Change the condition to check the state
    if (false) return <Loading />;

    const movie = this.state.movie;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return id ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => deleteMovie(id)}>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    ) : <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default MovieDetails;
