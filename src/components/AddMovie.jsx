// implement AddMovie component here
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
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleSubtitleInput = this.handleSubtitleInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
    this.handleStorylineInput = this.handleStorylineInput.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
    this.handleGenreInput = this.handleGenreInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleInput(event) {
    const { title } = this.state;
    this.setState({ title: event.target.value });
    console.log(title);
  }

  handleSubtitleInput(event) {
    const { subtitle } = this.state;
    this.setState({ subtitle: event.target.value });
    console.log(subtitle);
  }

  handleImageInput(event) {
    const { imagePath } = this.state;
    this.setState({ imagePath: event.target.value });
    console.log(imagePath);
  }

  handleStorylineInput(event) {
    const { storyline } = this.state;
    this.setState({ storyline: event.target.value });
    console.log(storyline);
  }

  handleRatingInput(event) {
    const { rating } = this.state;
    this.setState({ rating: event.target.value });
    console.log(rating);
  }

  handleGenreInput(event) {
    const { genre } = this.state;
    this.setState({ genre: event.target.value });
    console.log(genre);
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
    console.log('click');
  }

  titleInputLabel(title, handleTitleInput) {
    return (
      <label htmlFor="input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title-input"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ handleTitleInput }
        />
      </label>
    );
  }

  subtitleInputLabel(subtitle, handleSubtitleInput) {
    return (
      <label htmlFor="input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle-input"
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleSubtitleInput }
        />
      </label>
    );
  }

  imageInputLabel(imagePath, handleImageInput) {
    return (
      <label htmlFor="input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="image-input"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleImageInput }
        />
      </label>
    );
  }

  storylineInputLabel(storyline, handleStorylineInput) {
    return (
      <label htmlFor="input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline-input"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleStorylineInput }
        />
      </label>
    );
  }

  ratingInputLabel(rating, handleRatingInput) {
    return (
      <label htmlFor="input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating-input"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleRatingInput }
          min="0.0"
          max="10.0"
          step="0.1"
        />
      </label>
    );
  }

  genreSelectInputLabel(genre, handleGenreInput) {
    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre-input"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleGenreInput }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  submitButton() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleTitleInput, handleSubtitleInput, handleImageInput, handleStorylineInput,
      handleRatingInput, handleGenreInput } = this;
    return (
      <form action="" data-testid="add-movie-form">
        {this.titleInputLabel(title, handleTitleInput)}
        {this.subtitleInputLabel(subtitle, handleSubtitleInput)}
        {this.imageInputLabel(imagePath, handleImageInput)}
        {this.storylineInputLabel(storyline, handleStorylineInput)}
        {this.ratingInputLabel(rating, handleRatingInput)}
        {this.genreSelectInputLabel(genre, handleGenreInput)}
        {this.submitButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
