import React from 'react';

import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.addNewMovie = this.onMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  onMovie(dataMovie) {
    this.setState((eventState) => ({
      movies: [...eventState.movies, dataMovie],
    }));
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let movieList = movies;
    if (bookmarkedOnly === true) {
      movieList = movieList.filter((m) => m.bookmarked === true);
    }
    if (selectedGenre !== '') {
      movieList = movieList.filter((m) => m.genre === selectedGenre);
    }
    if (searchText !== '') {
      movieList = movieList.filter((m) => m.title.toLowerCase()
        .includes(searchText.toLowerCase())
        || m.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || m.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
      <MovieList movies={ movieList } />
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        {this.filterMovies()}
        <AddMovie onClick={ this.onMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
