import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
    };
    this.handleInsertMovie = this.handleInsertMovie.bind(this);
  }

  handleInsertMovie(data) {
    const { movies } = this.state;
    if (data) {
      const aux = [...movies, data];
      this.setState({ movies: aux });
    }
    console.log(movies);
  }

  render() {
    // const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.handleInsertMovie } />
        <SearchBar />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
