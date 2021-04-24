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
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleStoryline = this.handleStoryline.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleImage(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleStoryline(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  handleSubmit(callback) {
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

  inputTitle() {
    const { title } = this.state;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleSubtitle }
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;

    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleImage }
        />
      </label>
    );
  }

  inputStoryline() {
    const { storyline } = this.state;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleStoryline }
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleRating }
        />
      </label>
    );
  }

  inputGenre() {
    const { genre } = this.state;

    return (
      <label data-testid="genre-input-label" htmlFor="genre-inpu">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleGenre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  inputButton(onClick) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => { event.preventDefault(); this.handleSubmit(onClick); } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
        { this.inputSubtitle() }
        { this.inputImage() }
        { this.inputStoryline() }
        { this.inputRating() }
        { this.inputGenre() }
        { this.inputButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
