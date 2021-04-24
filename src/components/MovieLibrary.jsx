import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
      newMovie: movies,
    };
    this.buttonSub = this.buttonSub.bind(this);
  }

  buttonSub(newM) {
    const { movies } = this.state;
    this.setState({
      newMovie: [...movies, newM],
    });
  }

  render() {
    const { newMovie } = this.state;
    return (
      <section>
        <SearchBar />
        <MovieList movies={ newMovie } />
        <AddMovie onClick={ this.buttonSub } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
