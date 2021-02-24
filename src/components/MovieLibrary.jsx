import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      selected: [],
      GenreAll: props.movies,
      movies: props.movies,
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchText(event) {
    const { movies } = this.props;
    const { value } = event.target;

    const filterTitle = movies
      .filter((movie) => movie.title.toLowerCase().includes(value));
    const filterSubtitle = movies
      .filter((movie) => movie.subtitle.toLowerCase().includes(value));
    const filterStoryline = movies
      .filter((movie) => movie.storyline.toLowerCase().includes(value));
    const moviesConcat = filterTitle.concat(filterSubtitle, filterStoryline);
    const moviesFilterAll = moviesConcat
      .filter((newMovies, i) => moviesConcat.indexOf(newMovies) === i);

    this.setState({
      [event.target.name]: event.target.value,
      movies: moviesFilterAll,
      GenreAll: moviesFilterAll,
    });
  }

  onBookmarkedChange(event) {
    const value = event.target.checked;
    const { movies, selected } = this.state;
    this.setState({
      selected: movies,
    });
    if (value === true) {
      const filter = movies.filter((movie) => movie.bookmarked);
      this.setState({
        [event.target.name]: event.target.checked,
        movies: filter,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.checked,
        movies: selected,
        GenreAll: selected,
      });
    }
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { GenreAll } = this.state;

    if (value !== '') {
      const filter = GenreAll.filter((movie) => movie.genre === value);
      this.setState({
        selectedGenre: value,
        movies: filter,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: GenreAll,
      });
    }
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
