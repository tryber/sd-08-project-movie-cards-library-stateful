import React from 'react';
import PropTypes from 'prop-types';
import SearchBarSelectOption from './SearchBarSelectOption';

class SearchBarSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="select-input"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <SearchBarSelectOption />
        </select>
      </label>
    );
  }
}

SearchBarSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBarSelect;
