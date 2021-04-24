import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderGenre = this.renderGenre.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(callback) {
    callback(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  renderTitle(value) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle(value) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage(value) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTextArea(value) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id=""
          cols="30"
          rows="3"
          value={ value }
          onChange={ this.handleChange }
        >
          { value }
        </textarea>
      </label>
    );
  }

  renderGenre(value) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id=""
          value={ value }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderRating(value) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderButton(param) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.handleClick(param) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImage(imagePath) }
        { this.renderTextArea(storyline) }
        { this.renderRating(rating) }
        { this.renderGenre(genre) }
        { this.renderButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
