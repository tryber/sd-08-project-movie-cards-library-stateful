// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateInputField from './CreateInputField';
import GenderSelector from './GenderSelector';

class SearchBar extends Component {
  createBookmarksSelector() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  CreateInputField() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <CreateInputField
        type="text"
        name="searchText"
        dataTestid="text-input-label"
        text="Inclui o texto:"
        inPutDataTestid="text-input"
        inputValue={ searchText }
        callBack={ onSearchTextChange }
      />
    );
  }

  createGenderSelector() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <GenderSelector
        name="selectedGenre"
        text="Filtrar por gênero"
        dataTestid="select-input-label"
        dataTestid2="select-input"
        dataTestid3="select-option"
        initialState={ selectedGenre }
        callBack={ onSelectedGenreChange }
        blankOption
      />
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.CreateInputField()}
        {this.createBookmarksSelector()}
        {this.createGenderSelector()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string,
  bookmarkedOnly: PropTypes.string,
  onBookmarkedChange: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
};
export default SearchBar;
