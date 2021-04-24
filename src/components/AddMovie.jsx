import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleOnClick(target) {
    target(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    });
  }

  movieTitleInput(title, callback) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ callback }
        />
      </label>
    );
  }

  movieSubtitleInput(subtitle, callback) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ callback }
        />
      </label>
    );
  }

  movieImageInput(imagePath, callback) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callback }
        />
      </label>
    );
  }

  movieStoryLineInput(storyLine, callback) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          name="storyLine"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ callback }
          cols="20"
          rows="10"
        />
      </label>
    );
  }

  movieRatingInput(rating, callback) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ callback }
        />
      </label>
    );
  }

  movieGenreSelectInput(genre, callback) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  createSendButton(callback, funcao) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => callback(funcao) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.movieTitleInput(title, this.handleChange)}
        {this.movieSubtitleInput(subtitle, this.handleChange)}
        {this.movieImageInput(imagePath, this.handleChange)}
        {this.movieStoryLineInput(storyLine, this.handleChange)}
        {this.movieRatingInput(rating, this.handleChange)}
        {this.movieGenreSelectInput(genre, this.handleChange)}
        {this.createSendButton(this.handleOnClick, onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
