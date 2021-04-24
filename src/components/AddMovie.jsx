import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.botaoAdicionar = this.botaoAdicionar.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  titulo(title, callBack) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          title={ title }
          data-testid="title-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  subtitulo(subtitle, callBack) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ callBack }
        />
      </label>
    );
  }

  imagem(imagePath, callBack) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  historia(storyLine, callBack) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyLine }
          name="storyLine"
          id="stryLine"
          cols="30"
          rows="5"
          onChange={ callBack }
        />
      </label>
    );
  }

  nota(rating, callBack) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ callBack }
        />
      </label>
    );
  }

  genero(genre, callBack) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ genre }
          onChange={ callBack }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

      </label>
    );
  }

  botaoAdicionar(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    });
    document.getElementById('add-movie-form').reset();
  }

  render() {
    const { title, subtitle, imagePath, storyLine, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form" id="add-movie-form">
        { this.titulo(title, this.handleChange) }
        { this.subtitulo(subtitle, this.handleChange) }
        { this.imagem(imagePath, this.handleChange) }
        { this.historia(storyLine, this.handleChange) }
        { this.nota(rating, this.handleChange) }
        { this.genero(genre, this.handleChange) }
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.botaoAdicionar }
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
