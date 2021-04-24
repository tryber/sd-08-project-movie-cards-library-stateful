import React from 'react';
import PropTypes from 'prop-types';
import TextInputLabel from '../myComponents/TextInputLabel';
import CheckBoxInputLabel from '../myComponents/CheckBoxInputLabel';
import SelectInputLabelGenreFilter from '../myComponents/SelectInputLabelGenreFilter';

class SearchBar extends React.Component {
  createTextInputLabel(value, onChange) {
    return (
      <TextInputLabel
        labelText="Inclui o texto"
        name="text-input"
        type="text"
        value={ value }
        onChange={ onChange }
        dataTestId="text-input"
        dataLabelTestId="text-input-label"
      />
    );
  }

  createCheckBoxInputLabel(checked, onChange) {
    return (
      <CheckBoxInputLabel
        checked={ checked }
        onChange={ onChange }
        dataTesteId="checkbox-input"
        dataLabelTesteId="checkbox-input-label"
      />
    );
  }

  createSelectInputLabelGenreFilter(value, onChange) {
    return (
      <SelectInputLabelGenreFilter
        labelText="Filtrar por gênero"
        name="select-input"
        value={ value }
        onChange={ onChange }
        dtId="select-input"
        dtLabelId="select-input-label"
        dtOptionId="select-option"
      />
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          { this.createTextInputLabel(searchText, onSearchTextChange) }
          { this.createCheckBoxInputLabel(bookmarkedOnly, onBookmarkedChange) }
          { this.createSelectInputLabelGenreFilter(selectedGenre, onSelectedGenreChange) }
        </form>
      </div>
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
