// import { render } from 'enzyme';
// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <p>{movies}</p>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
