import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    // const movies = props.movies
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  // onClick (callback,
  //   state
  //   ){
  //   callback();
  //   this.setState((estadoAnterior, props) => ({
  //     [props.movies]: estadoAnterior.movies.push(state)
  //   }))
  // }

  // onClick (
  //   state
  //   ){
  //   this.setState((estadoAnterior, props) => ({
  //     [props.movies]: estadoAnterior.movies.push(state)
  //   }))
  // }
  // Ajuda do site https://www.robinwieruch.de/react-state-array-add-update-remove
  onClick(
    state,
  ) {
    this.setState((estadoAnterior) => {
      const movies = estadoAnterior.movies.concat(state);
      return {
        movies,
      };
    });
  }

  toFilter = () => {
    let { movies } = this.state;
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    if (searchText !== '') {
      movies = movies.filter((movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)));
    }
    if (selectedGenre !== '') {
      movies = movies.filter(
        (movie) => movie.genre === selectedGenre,
      );
    }
    if (bookmarkedOnly) movies = movies.filter((movie) => movie.bookmarked);

    return movies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const movies = this.toFilter();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
