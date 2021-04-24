import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.filterByBookmarked = this.filterByBookmarked.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByText = this.filterByText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  searchBarElement() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  filterByBookmarked(movies, bookmarkedOnly) {
    const filteredMovies = bookmarkedOnly
      ? movies.filter((movie) => movie.bookmarked)
      : movies;

    return filteredMovies;
  }

  filterByGenre(movies, selectedGenre) {
    const filteredMovies = selectedGenre !== ''
      ? movies.filter((movie) => movie.genre === selectedGenre)
      : movies;

    return filteredMovies;
  }

  filterByText(movies, searchText) {
    const filteredMovies = searchText !== ''
      ? movies.filter((movie) => {
        const titleIncludes = movie.title.includes(searchText);
        const subtitleIncludes = movie.subtitle.includes(searchText);
        return titleIncludes || subtitleIncludes;
      })
      : movies;

    return filteredMovies;
  }

  filterMovies() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    let filteredMovies = this.filterByText(movies, searchText);
    filteredMovies = this.filterByBookmarked(filteredMovies, bookmarkedOnly);
    filteredMovies = this.filterByGenre(filteredMovies, selectedGenre);

    return filteredMovies;
  }

  addMovie({ title, subtitle, imagePath, storyline, rating, genre }) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, {
        title,
        subtitle,
        imagePath,
        storyline,
        rating,
        genre,
      }],
    }));
  }

  render() {
    const movies = this.filterMovies();

    return (
      <section>
        { this.searchBarElement() }
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
