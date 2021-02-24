import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    const { name, value, type } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({
      [name]: newValue,
    });
  }

  resetState() {
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

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          name="title"
          type="text"
          data-testid="title-input"
          onChange={ this.handleChange }
          value={ title }
        />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          value={ subtitle }
        />
      </label>
    );
  }

  addMovieImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ this.handleChange }
          value={ imagePath }
        />
      </label>
    );
  }

  addMovieStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline-input"
          name="storyline"
          type="text"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          value={ storyline }
        />
      </label>
    );
  }

  addMovieRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ this.handleChange }
          value={ rating }
        />
      </label>
    );
  }

  addMovieGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  buttonMovieAdd() {
    return (
      <button
        type="submit"
        onClick={ (event) => { event.preventDefault(); this.resetState(); } }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.addMovieTitle() }
        { this.addMovieSubtitle() }
        { this.addMovieImage() }
        { this.addMovieStoryline() }
        { this.addMovieRating() }
        { this.addMovieGenre() }
        { this.buttonMovieAdd() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
