import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputType from './form/InputType';
import Select from './form/Select';
import selectData from './form/selectOptions';

class SearchBar extends Component {
  inputText(value, onChange) {
    return (
      <InputType
        type="text"
        name="searchText"
        onChange={ onChange }
        value={ value }
        labelTestId="text-input-label"
        inputTestId="text-input"
      >
        Inclui o texto:
      </InputType>
    );
  }

  inputCheckbox(checked, onChange) {
    return (
      <InputType
        type="checkbox"
        name="bookmarkCheckbox"
        onChange={ onChange }
        value={ checked }
        labelTestId="checkbox-input-label"
        inputTestId="checkbox-input"
      >
        Mostrar somente favoritos
      </InputType>
    );
  }

  select(data, value, onChange) {
    return (
      <Select
        data={ data }
        name="selectGenre"
        onChange={ onChange }
        value={ value }
        labelTestId="select-input-label"
        inputTestId="select-input"
        optionTestId="select-option"
      >
        Filtrar por gênero
      </Select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        { this.inputText(searchText, onSearchTextChange) }
        { this.inputCheckbox(bookmarkedOnly, onBookmarkedChange) }
        { this.select(selectData, selectedGenre, onSelectedGenreChange) }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
