import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.book = this.book.bind(this);
    this.selected = this.selected.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.filterBook = this.filterBook.bind(this);
    this.filterSelect = this.filterSelect.bind(this);
    this.addMovie = this.addMovie.bind(this);
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
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const search = this.search(name, value, bookmarkedOnly, selectedGenre);
    const book = this.book(name, value, searchText, selectedGenre);
    const selected = this.selected(name, value, searchText, bookmarkedOnly);
    if (search || book || selected) {
      this.setState({
        [name]: value,
        movies,
      });
    } else {
      const filterSearch = this.filterSearch(name, value, movies, searchText);
      const filterBook = this.filterBook(name, value, filterSearch, bookmarkedOnly);
      this.filterSelect(name, value, filterBook, selectedGenre);
    }
  }

  search(name, value, bookmarkedOnly, selectedGenre) {
    return (name === 'searchText'
    && value === ''
    && bookmarkedOnly === false
    && selectedGenre === '');
  }

  book(name, value, searchText, selectedGenre) {
    return (name === 'bookmarkedOnly'
    && value === false
    && searchText === ''
    && selectedGenre === '');
  }

  selected(name, value, searchText, bookmarkedOnly) {
    return (name === 'selectedGenre'
    && value === ''
    && searchText === ''
    && bookmarkedOnly === false);
  }

  filterSearch(name, value, movies, searchText) {
    let aux;
    if (name === 'searchText' && value !== '') {
      aux = movies.filter((movie) => (movie.title.includes(value)
      || movie.subtitle.includes(value) || movie.storyline.includes(value)));
    } else if (searchText !== '') {
      aux = movies.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)));
    } else { aux = movies; }
    this.setState({
      [name]: value,
      movies: aux,
    });
    return aux;
  }

  filterBook(name, value, filterSearch, bookmarkedOnly) {
    let aux;
    if ((name === 'bookmarkedOnly' && value === true)
    || (name !== 'bookmarkedOnly' && bookmarkedOnly === true)) {
      aux = filterSearch.filter((movie) => movie.bookmarked === true);
    } else {
      aux = filterSearch;
    }
    this.setState({
      [name]: value,
      movies: aux,
    });
    return aux;
  }

  filterSelect(name, value, filterBook, selectedGenre) {
    let aux;
    if (name === 'selectedGenre' && value !== '') {
      aux = filterBook.filter((movie) => movie.genre === value);
    } else if (name !== 'selectedGenre' && selectedGenre !== '') {
      aux = filterBook.filter((movie) => movie.genre === selectedGenre);
    } else {
      aux = filterBook;
    }
    this.setState({
      [name]: value,
      movies: aux,
    });
    return aux;
  }

  addMovie(state) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
