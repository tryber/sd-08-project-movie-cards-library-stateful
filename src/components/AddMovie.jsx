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

    this.onButtonClick = this.onButtonClick.bind(this);
    this.formCallback = this.formCallback.bind(this);
  }

  onButtonClick(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  formCallback(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  titulo(title, callback) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          name="title"
          onChange={ callback }
          data-testid="title-input"
        />
      </label>
    );
  }

  subtitulo(subtitle, callback) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          name="subtitle"
          onChange={ callback }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imagem(imagePath, callback) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          onChange={ callback }
          data-testid="image-input"
        />
      </label>
    );
  }

  sinopse(storyline, callback) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          name="storyline"
          onChange={ callback }
          data-testid="storyline-input"
          cols="30"
          rows="7"
        />
      </label>
    );
  }

  avaliacao(rating, callback) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          name="rating"
          onChange={ callback }
          data-testid="rating-input"
        />
      </label>
    );
  }

  genero(genre, callback) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          name="genre"
          onChange={ callback }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  botao(callback) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (e) => {
          e.preventDefault();
          this.onButtonClick(callback);
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle,
      imagePath, storyline,
      rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.titulo(title, this.formCallback) }
        { this.subtitulo(subtitle, this.formCallback) }
        { this.imagem(imagePath, this.formCallback) }
        { this.sinopse(storyline, this.formCallback) }
        { this.avaliacao(rating, this.formCallback) }
        { this.genero(genre, this.formCallback) }
        { this.botao(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
