import React from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target: { value } }) {
    const { movies } = this.state;
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => [movie.title, movie.subtitle, movie.storyline]
        .some((content) => content.includes(value))),
    });
  }

  onBookmarkedChange({ target: { checked } }) {
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: checked,
      movies: movies.filter((movie) => movie.bookmarked === checked),
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    const { movies } = this.state;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((movie) => movie.genre === value),
    });
  }

  onClick(movie) {
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
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  map: PropTypes.func.isRequired,
}).isRequired };

export default MovieLibrary;
