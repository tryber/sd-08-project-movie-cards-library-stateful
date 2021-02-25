// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.resetButton = this.resetButton.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  createInputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
          id="titleInput"
          name="title"
        />
      </label>
    );
  }

  createInputSubTitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="subtitleInput"
          name="subtitle"
        />
      </label>
    );
  }

  createInputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
          id="imageInput"
          name="imagePath"
        />
      </label>
    );
  }

  createInputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
          id="storyline"
          name="storyline"
        />
      </label>
    );
  }

  createInputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
          id="rating"
          name="rating"
        />
      </label>
    );
  }

  createSelect() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
          id="genre"
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  resetButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(this.state);
  }

  createButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.resetButton }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.createInputTitle() }
        { this.createInputSubTitle() }
        { this.createInputImage() }
        { this.createInputStoryline() }
        { this.createInputRating() }
        { this.createSelect() }
        { this.createButton() }
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
