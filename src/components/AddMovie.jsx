import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  addNewMovie() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    const newMovie = {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    };

    this.clearState();
    const { onClick } = this.props;
    onClick(newMovie);
  }

  clearState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
        />
      </label>
    );
  }

  renderSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          name="subtitle"
        />
      </label>
    );
  }

  renderImage(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryline(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          name="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.addNewMovie }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImage(imagePath) }
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
