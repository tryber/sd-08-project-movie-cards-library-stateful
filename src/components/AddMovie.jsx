// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.subtitleRender = this.subtitleRender.bind(this);
    this.titleRender = this.titleRender.bind(this);
    this.imageRender = this.imageRender.bind(this);
    this.storylineRender = this.storylineRender.bind(this);
    this.ratingRender = this.ratingRender.bind(this);
    this.genreRender = this.genreRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bottomRender = this.bottomRender.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleRender() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          name="title"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleRender() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageRender() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  storylineRender() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          onChange={ this.handleChange }
          name="storyline"
          value={ storyline }
        />
      </label>
    );
  }

  ratingRender() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
          data-testid="rating-input"
        />
      </label>
    );
  }

  genreRender() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
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

  bottomRender() {
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
        { this.titleRender() }
        { this.subtitleRender() }
        { this.imageRender() }
        { this.storylineRender() }
        { this.ratingRender() }
        { this.genreRender() }
        { this.bottomRender() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
