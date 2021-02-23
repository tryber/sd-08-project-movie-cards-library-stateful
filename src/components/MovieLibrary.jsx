import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleAddMovie(insertMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, insertMovie],
    });
  }

  FilterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(bookmarkedOnly);
    let filter = [...movies];

    if (searchText) {
      filter = filter.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filter = filter.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre) {
      filter = filter.filter(({ genre }) => genre.includes(selectedGenre));
    }
    return filter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.FilterMovies() } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
