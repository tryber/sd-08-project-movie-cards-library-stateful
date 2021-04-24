import React, { Component } from 'react';

import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick(newMovie) {
    this.setState((anterior) => {
      const newMovies = [...anterior.movies];
      newMovies.push(newMovie);
      return { movies: newMovies };
    });
  }

  onSearchTextChange(event) {
    const valor = event.target.value;
    this.setState({ searchText: valor });

    const { movies } = this.state;
    let moviesFiltred = movies.filter((movie) => movie.title.includes(valor));

    if (moviesFiltred.length === 0) {
      const moviesFiltredBySub = movies.filter((movie) => movie.subtitle.includes(valor));
      moviesFiltred = moviesFiltredBySub;
    }

    if (moviesFiltred.length === 0) {
      const movFiltSinop = movies.filter((movie) => movie.storyline.includes(valor));
      moviesFiltred = movFiltSinop;
    }

    this.setState({ movies: moviesFiltred });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });

    const { movies } = this.state;
    const moviesFiltred = movies.filter((movie) => movie.bookmarked === true);
    this.setState({ movies: moviesFiltred });
  }

  onSelectedGenreChange(event) {
    const valor = event.target.value;
    this.setState({ selectedGenre: valor });

    const { movies } = this.state;
    const moviesFiltred = movies.filter((movie) => movie.genre === valor);
    this.setState({ movies: moviesFiltred });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie bookmarkedOnly={ bookmarkedOnly } onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
