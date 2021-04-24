import React from 'react';

class SelectGenreNew extends React.Component {
  constructor() {
    super();

    this.state = {
      genre: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      genre: target.value,
    });
  }

  render() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="imagePath">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.onChangeHandler }
        >
          <option value="action" data-testid="genre-option"> Ação</option>
          <option value="comedy" data-testid="genre-option"> Comédia</option>
          <option value="thriller" data-testid="genre-option"> Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGenreNew;
