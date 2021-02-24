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

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    const { movies } = this.props;

    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => {
      const { bookmarkedOnly, selectedGenre, searchText } = this.state;
      const moviesFiltered = movies.filter(
        ({ bookmarked, genre, title, subtitle, storyline }) => (
          (!bookmarkedOnly || bookmarked)
            && (selectedGenre === '' || selectedGenre === genre)
            && (searchText === ''
              || title.includes(searchText)
              || subtitle.includes(searchText)
              || storyline.includes(searchText))
        ),
      );
      this.setState({ movies: moviesFiltered });
    });
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
