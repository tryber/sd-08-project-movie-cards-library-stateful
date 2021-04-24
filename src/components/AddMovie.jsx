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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let { value } = target;
    this.setState({
      [name]: value,
    });
    if (name === 'rating') {
      value = parseFloat(value);
    }
  }

  handleClick(target) {
    target(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="titleInput"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitleInput"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imageInput" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="imageInput"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  storylineArea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storylineArea" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          id="storylineArea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="ratingInput"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genreInput"
          value={ genre }
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

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" className="form">
        {this.titleInput()}
        {this.subtitleInput()}
        {this.imageInput()}
        {this.storylineArea()}
        {this.ratingInput()}
        {this.genreInput()}
        <button
          type="button"
          onClick={ () => this.handleClick(onClick) }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
