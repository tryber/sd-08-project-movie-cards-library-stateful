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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleStorylineChange = this.handleStorylineChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleButton(callback) {
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

  handleGenreChange(event) {
    const inputGenre = event.target.value;
    this.setState({
      genre: inputGenre,
    });
  }

  handleRatingChange(event) {
    const inputRating = event.target.value;
    this.setState({
      rating: inputRating,
    });
  }

  handleStorylineChange(event) {
    const inputStoryline = event.target.value;
    this.setState({
      storyline: inputStoryline,
    });
  }

  handleTitleChange(event) {
    const inputTitle = event.target.value;
    this.setState({
      title: inputTitle,
    });
  }

  handleSubtitleChange(event) {
    const inputSubtitle = event.target.value;
    this.setState({
      subtitle: inputSubtitle,
    });
  }

  handleImageChange(event) {
    const inputPath = event.target.value;
    this.setState({
      imagePath: inputPath,
    });
  }

  renderInputGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleGenreChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderInputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação:
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleRatingChange }
        />
      </label>
    );
  }

  renderInputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse:
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleStorylineChange }
        />
      </label>
    );
  }

  renderInputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleImageChange }
        />
      </label>
    );
  }

  renderInputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleSubtitleChange }
        />
      </label>
    );
  }

  renderInputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título:
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleTitleChange }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.renderInputTitle()}
        {this.renderInputSubtitle()}
        {this.renderInputImage()}
        {this.renderInputStoryline()}
        {this.renderInputRating()}
        {this.renderInputGenre()}
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleButton(onClick) }
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
