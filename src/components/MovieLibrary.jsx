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
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick(movie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
    const form = document.querySelector('form');
    form.reset();
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    const { movies } = this.props;
    const { searchText } = this.state;
    this.setState({
      searchText: value,
      movies: movies.filter((each) => Object.values(each).includes(searchText)),
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    const { selectedGenre } = this.state;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((each) => each.genre.includes(selectedGenre)),
    });
    if (selectedGenre.length === 0) {
      this.setState({
        movies,
      });
    }
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
    }));
    if (!bookmarkedOnly) {
      this.setState({
        movies: movies.filter((e) => e.bookmarked),
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>);
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
