// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.clearInput();
  }

  clearInput() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  RenderTitleInput() {
    const { title } = this.state;
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

  RenderSubtitleInput() {
    const { subtitle } = this.state;
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

  RenderImageInput() {
    const { imagePath } = this.state;
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

  RenderStoryLineInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline-input"
          onChange={ this.handleChange }
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          rows="8"
          cols="25"

        />
      </label>
    );
  }

  RenderRatingInput() {
    const { rating } = this.state;
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

  RenderGenreInput() {
    const { genre } = this.state;
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
    return (
      <form data-testid="add-movie-form">
        {this.RenderTitleInput()}
        {this.RenderSubtitleInput()}
        {this.RenderImageInput()}
        {this.RenderStoryLineInput()}
        {this.RenderRatingInput()}
        {this.RenderGenreInput()}
        <button
          data-testid="send-button"
          type="reset"
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
