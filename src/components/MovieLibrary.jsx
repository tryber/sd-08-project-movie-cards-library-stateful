// implement MovieLibrary component here
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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(objectMovie) {
    this.setState((currentState) => ({
      movies: [...currentState.movies, objectMovie],
    }));
  }

  handleFilter(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesToShow = movies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => JSON.stringify(Object.values(movie))
        .toLowerCase().includes(searchText));
    moviesToShow = !bookmarkedOnly ? moviesToShow
      : moviesToShow.filter((movie) => movie.bookmarked);

    return moviesToShow;
  }

  onClick(data) {
    console.log(data);
  }

  onSearchTextChange(event) {
    const { searchText } = this.state;
    this.setState({ searchText: event.target.value });
    console.log(searchText);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
    console.log(bookmarkedOnly);
  }

  onSelectedGenreChange(select) {
    const { selectedGenre } = this.state;
    this.setState({ selectedGenre: select.target.value });
    console.log(selectedGenre);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange,
      handleAddMovie } = this;
    const moviesToShow = this.handleFilter(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ moviesToShow } />
        <AddMovie onClick={ handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
