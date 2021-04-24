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
    this.onReset = this.onReset.bind(this);
  }

  handleChange({ target }) {
    // console.log(target.name);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onReset() {
    // event.preventDefault();
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

  renderTitleInput(title, onChange) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }

  renderSubtitleInput(subtitle, onChange) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }

  renderImageInput(imagePath, onChange) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }

  renderStorylineInput(storyline, onChange) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }

  renderRatingInput(rating, onChange) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }

  renderGenreInput(genre, onChange) {
    return (
      <label htmlFor="subtitle-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>

    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput(title, this.handleChange) }
        { this.renderSubtitleInput(subtitle, this.handleChange) }
        { this.renderImageInput(imagePath, this.handleChange) }
        { this.renderStorylineInput(storyline, this.handleChange) }
        { this.renderRatingInput(rating, this.handleChange) }
        { this.renderGenreInput(genre, this.handleChange) }
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onReset }
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
