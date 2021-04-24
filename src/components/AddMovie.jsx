import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.initialState();
  }

  initialState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
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
        onClick={ this.handleClick }
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
