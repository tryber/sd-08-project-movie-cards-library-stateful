import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  'title-input': '',
  'subtitle-input': '',
  'image-input': '',
  'storyline-input': '',
  'rating-input': 0,
  'genre-input': 'action',
  bookmarked: false,
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();

    const { 'title-input': title, 'subtitle-input': subtitle,
      'image-input': imagePath, 'genre-input': genre, 'storyline-input': storyline,
      'rating-input': rating, bookmarked } = this.state;

    onClick({
      title,
      subtitle,
      imagePath,
      genre,
      storyline,
      rating,
      bookmarked,
    });

    this.setState(initialState);
  }

  Title() {
    const { 'title-input': title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          name="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  Subtitle() {
    const { 'subtitle-input': subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          name="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  Image() {
    const { 'image-input': imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          name="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  Storyline() {
    const { 'storyline-input': storyline } = this.state;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline-input"
          type="text"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  Rating() {
    const { 'rating-input': rating } = this.state;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          name="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  Options() {
    return (
      <>
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </>
    );
  }

  Select() {
    const { 'genre-input': genre } = this.state;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          { this.Options() }
        </select>
      </label>
    );
  }

  Button() {
    return (
      <button
        type="submit"
        onClick={ this.handleSubmit }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.Title() }
        { this.Subtitle() }
        { this.Image() }
        { this.Storyline() }
        { this.Rating() }
        { this.Select() }
        { this.Button() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
