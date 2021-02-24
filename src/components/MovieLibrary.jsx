import React from 'react';

import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   searchText: '',
  //   //   bookmarkedOnly: false,
  //   //   selectedGenre: '',
  //   //   movies: props.movies,
  //   // };
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieLibrary;
