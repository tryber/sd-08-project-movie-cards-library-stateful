import React from 'react';

class SearchBar extends React.Component {
  
  inputText(searchText, onSearchTextChange) {
    return (
    <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            className="input"
          />
    </label>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            className="checkbox-input"
          />
      </label>
    );
  }

  selectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"          
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          className="input"
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
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.inputText(searchText, onSearchTextChange)}
        {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
        {this.selectGenre(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
