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
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  handleChange({ target: { name, value, type, checked } }) {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  // utilizando o ternário para verificar o type da change e alterar o state.

  searchFilteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }

  // task 19, searchfilteredmovies busca os movies por title, subtitle, story,
  // genero - dica PS - desconstruir e retornar o resultado
  // os operadores de ou || vai testando até dar true e retornar
  // atendeu as requisições, deu true ele mostra no filtro
  // criou uma constante, filteredMovies, que vai pegar as infos do estado, filtrando,
  // e passando p elemento filho, que renderiza.
  render() {
    const filteredMovies = this.searchFilteredMovies();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <p>Movie Library</p>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </>
    );
  }
}

// mesma lógica de implementação do AddMovie, desestruturei, para colocar
// as infos no state e passar as propriedades do estado(state)
// com relação ao AddMovie, necessário criar o handleAddMovie
// que vai trazer os movies pro estado, e renderizar os movies e suas propriedades
// título, subtitulo, imagem, etc.. warnings de proptypes -
// destructuring no render p corrigir - dica PS

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
