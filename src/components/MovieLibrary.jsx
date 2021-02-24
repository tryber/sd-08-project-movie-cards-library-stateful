import React from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      movies: props.movies,
      'text-input': '',
      'check-box': false,
      'select-input': '',
    };
  }

  handleChange({ target }) {
    const { name, type, value, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  }

  onClick(movie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, movie],
    });
  }

  getFilteredMovies() {
    const { movies } = this.state;
    const { 'text-input': textInput, 'check-box': checkBox,
      'select-input': selectInput } = this.state;
    let result = [...movies];
    if (textInput) {
      result = result.filter((movie) => (
        movie.title.includes(textInput)
        || movie.subtitle.includes(textInput)
        || movie.storyline.includes(textInput)
      ));
    }
    if (selectInput) {
      result = result.filter((movie) => movie.genre.includes(selectInput));
    }
    if (checkBox) {
      result = result.filter((movie) => movie.bookmarked);
    }
    return result;
  }

  renderSearchBar() {
    const { 'text-input': textInput,
      'check-box': checkBox,
      'select-input': selectInput } = this.state;
    return (<SearchBar
      searchText={ textInput }
      onSearchTextChange={ this.handleChange }
      bookmarkedOnly={ checkBox }
      onBookmarkedChange={ this.handleChange }
      selectedGenre={ selectInput }
      onSelectedGenreChange={ this.handleChange }
    />);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        {this.renderSearchBar()}
        <MovieList movies={ this.getFilteredMovies() } />
        <AddMovie onClick={ this.onClick } />
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
