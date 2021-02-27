import React, { Component } from 'react';

import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearDataMovie = this.clearDataMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.clearDataMovie();
    const { onClick } = this.props;
    onClick(this.state);
  }

  clearDataMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  TitleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          id="title-input"
          name="title"
          onChange={ this.handleChange }
          data-testid="title-input"
          type="text"
          value={ title }
        />
      </label>
    );
  }

  SubtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
          type="text"
        />
      </label>
    );
  }

  ImageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          id="image-input"
          data-testid="image-input"
          onChange={ this.handleChange }
          value={ imagePath }
          name="imagePath"
          type="text"
        />
      </label>
    );
  }

  StoryLineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline-input"
          onChange={ this.handleChange }
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
        />
      </label>
    );
  }

  RatingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating-input"
          data-testid="rating-input"
          onChange={ this.handleChange }
          value={ rating }
          name="rating"
          type="number"
        />
      </label>
    );
  }

  GenreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.TitleInput(title)}
        {this.SubtitleInput(subtitle)}
        {this.ImageInput(imagePath)}
        {this.StoryLineInput(storyline)}
        {this.RatingInput(rating)}
        {this.GenreInput(genre)}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
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
