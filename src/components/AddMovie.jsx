// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './AddMovie.module.css';

const initialState = {
  'title-input': '',
  'subtitle-input': '',
  'storyline-input': '',
  'rating-input': 0,
  'genre-input': 'action',
  'image-input': '',
  bookmarked: false,
};

const labelsClass = 'add-movie-labels';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      genres: [
        { value: 'action', text: 'Ação' },
        { value: 'comedy', text: 'Comédia' },
        { value: 'thriller', text: 'Suspense' },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, type, value } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({
      [name]: newValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const {
      'title-input': title, 'subtitle-input': subtitle,
      'storyline-input': storyline, 'rating-input': rating,
      'genre-input': genre, 'image-input': imagePath, bookmarked,
    } = this.state;
    onClick({
      bookmarked,
      genre,
      imagePath,
      rating,
      storyline,
      subtitle,
      title,
    });
    this.setState(initialState);
  }

  renderTitleInput() {
    const { 'title-input': titleInput } = this.state;
    return (
      <label
        className={ styles[labelsClass] }
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          id="title-input"
          name="title-input"
          data-testid="title-input"
          value={ titleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { 'subtitle-input': subtitleInput } = this.state;
    return (
      <label
        className={ styles[labelsClass] }
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          name="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImageInput() {
    const { 'image-input': imageInput } = this.state;
    return (
      <label
        className={ styles[labelsClass] }
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          id="image-input"
          name="image-input"
          data-testid="image-input"
          value={ imageInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryLineInput() {
    const { 'storyline-input': storylineInput } = this.state;
    return (
      <label
        className={ styles[labelsClass] }
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          type="text"
          id="storyline-input"
          name="storyline-input"
          data-testid="storyline-input"
          value={ storylineInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRatingInput() {
    const { 'rating-input': ratingInput } = this.state;
    return (
      <label
        className={ styles[labelsClass] }
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating-input"
          data-testid="rating-input"
          value={ ratingInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenreOptions(genres) {
    return genres.map((genre, index) => (
      <option
        data-testid="genre-option"
        value={ genre.value }
        key={ index }
      >
        {genre.text}
      </option>
    ));
  }

  renderGenreInput() {
    const { 'genre-input': genreInput, genres } = this.state;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          type="number"
          id="genre-input"
          name="genre-input"
          data-testid="genre-input"
          value={ genreInput }
          onChange={ this.handleChange }
        >
          { this.renderGenreOptions(genres) }
        </select>
      </label>
    );
  }

  renderFormButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <section className={ styles['add-movie-wrapper'] }>
        <h2 style={ { textAlign: 'center' } }>Adicione um filme </h2>
        <form className={ styles['add-movie'] } data-testid="add-movie-form">
          { this.renderTitleInput() }
          { this.renderSubtitleInput() }
          { this.renderImageInput() }
          { this.renderStoryLineInput() }
          { this.renderRatingInput() }
          { this.renderGenreInput() }
          { this.renderFormButton() }
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
