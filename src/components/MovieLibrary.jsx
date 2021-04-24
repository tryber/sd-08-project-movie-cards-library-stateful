// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChangeInputText = this.handleChangeInputText.bind(this);
    this.handleChangeMarked = this.handleChangeMarked.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChangeInputText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleChangeMarked(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  handleChangeGenre(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  handleAddMovie(insertMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, insertMovie],
    });
  }

  FilterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filter = [...movies];

    if (searchText) {
      filter = filter.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filter = filter.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre) {
      filter = filter.filter(({ genre }) => genre.includes(selectedGenre));
    }
    return filter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeInputText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeGenre }
        />
        <MovieList movies={ this.FilterMovies() } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
