import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick({ target }) {
    const { name, value } = target;
    if (name === 'button') {
      const { onClick } = this.props;
      onClick(this.state);

      this.setState({
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  renderTitle() {
    const { onClick } = this;
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ onClick }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitle() {
    const { onClick } = this;
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ onClick }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImage() {
    const { onClick } = this;
    const { imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ onClick }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryline() {
    const { onClick } = this;
    const { storyline } = this.state;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ onClick }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating() {
    const { onClick } = this;
    const { rating } = this.state;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          onChange={ onClick }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenre() {
    const { onClick } = this;
    const { genre } = this.state;

    return (
      <label htmlFor="genre-option" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ onClick }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this;

    return (
      <button name="button" type="button" onClick={ onClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderStoryline() }
        { this.renderRating() }
        { this.renderGenre() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
