// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.initialState = this.state;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  clickHandler() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          id="titleInput"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
        Subtítulo
        <input
          id="subtitleInput"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderImagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          id="imageInput"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineInput">
        Sinopse
        <input
          id="storylineInput"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingInput">
        Avaliação
        <input
          type="number"
          id="ratingInput"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleInputChange }
          id="genre"
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImagePath() }
        { this.renderStoryline() }
        { this.renderRating() }
        { this.renderGenre() }
        <button type="button" data-testid="send-button" onClick={ this.clickHandler }>
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
