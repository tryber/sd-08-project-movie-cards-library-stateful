import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.initialState = this.initialState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((beforeState) => ({
      ...beforeState,
      [name]: value,
    }));
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.initialState();
  }

  initialState() {
    // const { title, subtitle, imagePath, storyline ,rating, genre,}
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            data-testid="title-input"
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={ this.state.storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating-input"
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ this.state.rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            name="genre"
            value={ this.state.genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
