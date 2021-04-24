import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.rating = this.rating.bind(this);
    this.callFuncs = this.callFuncs.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  title(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
          id="title"
        />
      </label>
    );
  }

  subtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="subtitle"
        />
      </label>
    );
  }

  imagePath(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
          id="imagePath"
        />
      </label>
    );
  }

  storyline(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
          id="storyline"
        />
      </label>
    );
  }

  rating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
          id="rating"
        />
      </label>
    );
  }

  genre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genreNew">
        Gênero
        <select
          id="genreNew"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  callFuncs(callBack) {
    callBack(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addButton(onClick) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.callFuncs(onClick) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { rating, genre, title, subtitle, imagePath, storyline } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.title(title)}
        {this.subtitle(subtitle)}
        {this.imagePath(imagePath)}
        {this.storyline(storyline)}
        {this.rating(rating)}
        {this.genre(genre)}
        {this.addButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
