// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import './css/MovieLibrary.css';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      newMovies: [...movies],
    };
    this.setFilterMovies = this.setFilterMovies.bind(this);
    this.setBookMarked = this.setBookMarked.bind(this);
    this.setFilterByGenre = this.setFilterByGenre.bind(this);
    this.subjectForm = this.subjectForm.bind(this);
  }

  setFilterMovies(event) {
    const { value } = event.target;
    const { searchText, newMovies } = this.state;
    this.setState({ searchText: value, movies: newMovies }, () => {
      const lowerText = searchText.toLowerCase();
      const filteredMovies = newMovies
        .filter((movie) => movie.title
          .toLowerCase().includes(lowerText)
        || movie.subtitle
          .toLowerCase().includes(value)
        || movie.storyline
          .toLowerCase().includes(value));
      this.setState({ movies: filteredMovies });
    });
  }

  setBookMarked(event) {
    const { newMovies } = this.state;
    const { checked } = event.target;
    console.log(checked);
    this.setState({ bookmarkedOnly: checked }, () => {
      if (checked) {
        const filteredMovies = newMovies
          .filter((movie) => movie.bookmarked === checked);
        this.setState({ movies: filteredMovies });
      } else { this.setState({ movies: newMovies }); }
    });
  }

  setFilterByGenre(event) {
    const { value } = event.target;
    const { newMovies } = this.state;
    this.setState({ selectedGenre: value }, () => {
      const filteredMovies = newMovies
        .filter((movie) => movie.genre.includes(value));
      this.setState({ movies: filteredMovies });
    });
  }

  subjectForm(newMovie) {
    const { movies } = this.state;
    this.setState(() => ({
      movies: [...movies, newMovie],
      newMovies: [...newMovie, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="section-library">
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.setFilterMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.setBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.setFilterByGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.subjectForm } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
