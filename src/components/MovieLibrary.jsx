import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.onSearchTextChange }
        onBookmarkedChange={ this.onBookmarkedChange }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      />
    );
  }
}

export default MovieLibrary;
