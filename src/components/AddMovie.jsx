import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.initialStateValue = this.state;
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialStateValue);
  }

  renderTitle(title) {
    return (
      <label htmlFor="input-add-movie" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="input-add-movie"
          value={ title }
          data-testid="title-input"
          onChange={ (e) => this.setState({ title: e.target.value }) }
        />
      </label>
    );
  }

  renderSubtitle(subtitle) {
    return (
      <label htmlFor="input-add-movie" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="input-add-movie"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ (e) => this.setState({ subtitle: e.target.value }) }
        />
      </label>
    );
  }

  renderImagePath(imagePath) {
    return (
      <label htmlFor="input-add-movie" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="input-add-movie"
          value={ imagePath }
          data-testid="image-input"
          onChange={ (e) => this.setState({ imagePath: e.target.value }) }
        />
      </label>
    );
  }

  renderStoryline(storyline) {
    return (
      <label htmlFor="input-add-movie" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="input-add-movie"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ (e) => this.setState({ storyline: e.target.value }) }
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label htmlFor="input-add-movie" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="input-add-movie"
          value={ rating }
          data-testid="rating-input"
          onChange={ (e) => this.setState({ rating: e.target.value }) }
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label htmlFor="input-add-movie" data-testid="genre-input-label">
        Gênero
        <select
          type="text"
          name="input-add-movie"
          value={ genre }
          data-testid="genre-input"
          onChange={ (e) => this.setState({ genre: e.target.value }) }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.handleButton }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImagePath(imagePath) }
        { this.renderStoryline(storyline) }
        { this.renderRating(rating) }
        { this.renderGenre(genre) }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
