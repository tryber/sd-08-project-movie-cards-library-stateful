import React from 'react';
import PropTypes from 'prop-types';

class SeachBar extends React.Component {
  seachBar() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchbar" data-testid="text-input-label">
        Inclui o texto
        <input
          id="searchbar"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          type="text"
        />
      </label>
    );
  }

  checkBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  select() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          id="select"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form action="" data-testid="search-bar-form">
          {this.seachBar()}
          {this.checkBox()}
          {this.select()}
        </form>
      </div>
    );
  }
}

SeachBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SeachBar;
