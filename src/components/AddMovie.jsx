// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    //  Muda o valor do estado para o valor recebido no onChange
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    //  Adiciona o filme e retorna os estados ao valor inicial
    const { addMovie } = this.props;
    addMovie(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  InputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
          name="title"
          id="title"
        />
      </label>
    );
  }

  InputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
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

  InputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  InputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          onChange={ this.handleChange }
          name="storyline"
        >
          {storyline}
        </textarea>
      </label>
    );
  }

  InputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
          name="rating"
        />
      </label>
    );
  }

  InputGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ genre }
          name="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação </option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  InputButton() {
    return (
      <button type="button" data-testid="send-button" onClick={ this.initialState }>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          { this.InputTitle() }
          { this.InputSubtitle() }
          { this.InputImage() }
          { this.InputStoryline() }
          { this.InputRating() }
          { this.InputGenre() }
          { this.InputButton() }
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
