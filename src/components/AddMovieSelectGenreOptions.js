import React from 'react';

class AddMovieSelectGenreOptions extends React.Component {
  render() {
    return (
      <>
        <option value="action" data-testid="genre-option">
          Ação
        </option>
        <option value="comedy" data-testid="genre-option">
          Comédia
        </option>
        <option value="thriller" data-testid="genre-option">
          Suspense
        </option>
      </>
    );
  }
}

export default AddMovieSelectGenreOptions;
