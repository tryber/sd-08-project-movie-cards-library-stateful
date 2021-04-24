import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: '',
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.stateCallback = this.stateCallback.bind(this);
  }

  stateCallback({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler({ target }) {
    const { xablau, value } = target;
    this.setState({
      [xablau]: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.stateCallback }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.stateCallback }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.stateCallback }
        />
        <AddMovie onClick={ this.submitHandler } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number }).isRequired,
};

export default MovieLibrary;
