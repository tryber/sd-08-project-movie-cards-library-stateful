import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibray extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.addNewMovie = this.addNewMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  // filterMovies() {
  //   const { movies, bookmarkedOnly } = this.state;
  //   const resultado = movies.filter((parametro) => parametro.bookmarked === true);
  //   console.log(resultado);
  //   if (bookmarkedOnly === true) {
  //     this.setState({
  //       movies: resultado,
  //     });
  //   }
  // }

  // filterMoviess() {
  //   const {movies, bookmarkedOnly} = this.state;
  //   if(bookmarkedOnly === true) {
  //     return movies.filter((movie)=>movie.bookmarked===true);
  //   }
  //     return movies;
  // }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }

  addNewMovie(objectOfMovies) {
    this.setState(({ movies }) => ({
      movies: [...movies, objectOfMovies],
    }));
  }

  // GetFiltered Movies foi feito com a ajuda do Paulo Simões em um plantão em grupo

  render() {
    const filteredMovies = this.getFilteredMovies();
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log('renderizou');
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

// MovieLibray.propTypes = {
//   movies: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     storyline: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     imagePath: PropTypes.string.isRequired,
//     map: PropTypes.func.isRequired,
//   }).isRequired,
// };

MovieLibray.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibray;
