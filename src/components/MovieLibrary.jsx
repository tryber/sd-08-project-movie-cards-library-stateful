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
    this.busca = this.busca.bind(this);
    this.adicionarFilme = this.adicionarFilme.bind(this);
    this.filtrarFilme = this.filtrarFilme.bind(this);
  }

  filtrarFilme(moviesFilter) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let showMovies = moviesFilter
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    showMovies = !bookmarkedOnly
      ? showMovies
      : showMovies.filter((movie) => movie.bookmarked);
    return showMovies;
  }

  adicionarFilme(movieObj) {
    this.setState((state) => ({
      movies: [...state.movies, movieObj],
    }));
  }

  busca({ target }) {
    this.setState({
      [target.name]: target.type !== 'checkbox' ? target.value : target.checked,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const showMovies = this.filtrarFilme(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.busca }
          onBookmarkedChange={ this.busca }
          onSelectedGenreChange={ this.busca }
        />
        <MovieList movies={ showMovies } />
        <AddMovie onClick={ this.adicionarFilme } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
