import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
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
    const { value, name } = target;
    this.setState(() => ({ [name]: value }));
  }

  resetState() {
    this.setState(() => ({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="addTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          name="title"
          data-testid="title-input"
          onChange={ this.handleChange }
          id="addTitle"
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="addSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="addSubtitle"
        />
      </label>);
  }

  renderImagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="addImg" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
          id="addImg"
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;

    return (
      <label htmlFor="addTextArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="60"
          rows="1"
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          id="addTextArea"
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="addRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          name="rating"
          data-testid="rating-input"
          onChange={ this.handleChange }
          id="addRating"
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="addSelect" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="addSelect"
          onChange={ this.handleChange }
          data-testid="genre-input"
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          onClick(this.state);
          this.resetState();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" className="add-movie">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImagePath() }
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
