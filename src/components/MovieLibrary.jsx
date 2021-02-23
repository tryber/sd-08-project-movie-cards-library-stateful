// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.changeState = this.changeState.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setStateWorkaround();
  }

  onClick(movie) {
    const { movies } = this.state;
    movies.push(movie);
    this.setState({ movies });
  }

  setStateWorkaround() {
    const { movies } = this.props;
    this.setState({ movies });
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies.filter((movie) => ((!bookmarkedOnly || movie.bookmarked)
      && (!selectedGenre || movie.genre === selectedGenre)
      && (!searchText
        || (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)))));
  }

  changeState(name, type) {
    return ((event) => {
      this.setState({ [name]: type(event.target.value) });
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeState('searchText', String) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState('bookmarkedOnly', Boolean) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeState('selectedGenre', String) }
        />
        <MovieList
          movies={ this.filterMovies(movies) }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
      ]),
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
