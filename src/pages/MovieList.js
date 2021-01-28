import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], isLoaded: false };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies, isLoaded: true }));
  }

  render() {
    const { movies, isLoaded } = this.state;
    return isLoaded ? (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (<Loading />);
  }
}

export default MovieList;
