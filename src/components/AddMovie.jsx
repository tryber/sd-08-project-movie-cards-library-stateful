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

    this.onclick = this.onclick.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onclick(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addTitle(titulo) {
    return (
      <label data-testid="title-input-label" htmlFor="text-input">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ titulo }
          onChange={ this.onclick }
        />
      </label>
    );
  }

  addSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="text-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.onclick }
          value={ subtitle }
        />
      </label>
    );
  }

  addImage(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="text-input">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          onChange={ this.onclick }
          value={ imagePath }
        />
      </label>
    );
  }

  addStory(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="text-input">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.onclick }
          value={ storyline }
        />
      </label>
    );
  }

  addRating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="text-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ this.onclick }
          value={ rating }
        />
      </label>
    );
  }

  addGenre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="text-input">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          onChange={ this.onclick }
          value={ genre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  resetForm(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(this.state);
  }

  addButton() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.resetForm }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.addTitle(title) }
        { this.addSubtitle(subtitle) }
        { this.addImage(imagePath) }
        { this.addStory(storyline) }
        { this.addRating(rating) }
        { this.addGenre(genre) }
        { this.addButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
