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
    this.alterar = this.alterar.bind(this);
    this.botaoForm = this.botaoForm.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  inserirTitulo(title, onChange) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }

  inserirSubtitulo(subtitle, onChange) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }

  inserirImagem(imagePath, onChange) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }

  inserirSinopse(storyline, onChange) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
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

  inserirAvaliacao(rating, onChange) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }

  inserirGenero(genre, onChange) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  enviar(retornoCallback) {
    retornoCallback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  alterar(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  botaoForm(onClick) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (e) => {
          e.preventDefault();
          this.enviar(onClick);
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inserirTitulo(title, this.alterar) }
        { this.inserirSubtitulo(subtitle, this.alterar) }
        { this.inserirImagem(imagePath, this.alterar) }
        { this.inserirSinopse(storyline, this.alterar) }
        { this.inserirAvaliacao(rating, this.alterar) }
        { this.inserirGenero(genre, this.alterar) }
        { this.botaoForm(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
