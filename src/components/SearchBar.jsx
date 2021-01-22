import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectGenre from './SelectGenre';

const optionList = [
  {
    name: 'Todos',
    value: '',
  },
  {
    name: 'Ação',
    value: 'action',
  },
  {
    name: 'Comédia',
    value: 'comedy',
  },
  {
    name: 'Suspense',
    value: 'thriller',
  },
];

const DEF_SELECT_GENRE_PROPS = {
  labelName: 'Filtrar por gênero',
  testid1: 'select-input-label',
  testid2: 'select-input',
  testid3: 'select-option',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  InputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <br />
      </>
    );
  }

  InputBookmarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <>
        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarked"
            optionList={ optionList }
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <br />
      </>
    );
  }

  InputGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <>
        <SelectGenre
          { ...DEF_SELECT_GENRE_PROPS }
          optionList={ optionList }
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        />
        <br />
      </>
    );
  }

  /* eslint-disable */
  render() {
    return (
      <form data-testid="search-bar-form">
        {this.InputText()}
        {this.InputBookmarked()}
        {this.InputGenre()}
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
