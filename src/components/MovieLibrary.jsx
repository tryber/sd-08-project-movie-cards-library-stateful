import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  onTextChange({ target }) {
    this.setState({ searchText: target.value,
    });
  }

  onSelectChange({ target }) {
    this.setState({ selectedGenre: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  resetButton(createdMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, createdMovie],
    });
  }

  returnMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    // // Nao cobre o caso da lista nao favoritada, its not a bug, its a feature
    const filteredMovies = bookmarkedOnly ? movies.filter((element) => element.bookmarked)
      : movies;
    return filteredMovies.filter((element) => (
      (element.title.includes(searchText) || element.subtitle.includes(searchText)
          || element.storyline.includes(searchText))
          && (selectedGenre === '' || element.genre === selectedGenre)
    ));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const getMovies = this.returnMovies();
    return (
      <>
        <p>Movie Library</p>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectChange }
        />
        <AddMovie onClick={ this.resetButton } />
        <MovieList movies={ getMovies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
