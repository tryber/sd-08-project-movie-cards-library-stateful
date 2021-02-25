import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  storylineInput(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          data-testid="storyline-input"
          type="textarea"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreInput(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  newMovie() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return {
      title,
      subtitle,
      imagePath,
      storyline,
      rating: parseFloat(rating),
      genre,
      bookmarked: false,
    };
  }

  addButton(onClick) {
    const movie = this.newMovie();
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ () => onClick(movie) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imageInput(imagePath) }
        { this.storylineInput(storyline) }
        { this.ratingInput(rating) }
        { this.genreInput(genre) }
        { this.addButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
