import React from 'react';

class SearchBarSelectOptions extends React.Component {
  render() {
    return (
      <>
        <option value="" data-testid="select-option">
          Todos
        </option>
        <option value="action" data-testid="select-option">
          Ação
        </option>
        <option value="comedy" data-testid="select-option">
          Comédia
        </option>
        <option value="thriller" data-testid="select-option">
          Suspense
        </option>
      </>
    );
  }
}

export default SearchBarSelectOptions;
