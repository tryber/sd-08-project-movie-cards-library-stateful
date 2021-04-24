import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);

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
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  titleInputElement(value) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ value }
          name="title"
          id="title"
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInputElement(value) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ value }
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imagePathInputElement(value) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  sinopseTextareaElement(value) {
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          name="storyline"
          id="sinopse"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInputElement(value) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          id="rating"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreSelectElement(value) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ value }
          name="genre"
          id="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  formInputs() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <section>
        { this.titleInputElement(title) }
        { this.subtitleInputElement(subtitle) }
        { this.imagePathInputElement(imagePath) }
        { this.sinopseTextareaElement(storyline) }
        { this.ratingInputElement(rating) }
        { this.genreSelectElement(genre) }
      </section>
    );
  }

  submitAndClear(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.formInputs() }
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submitAndClear }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
