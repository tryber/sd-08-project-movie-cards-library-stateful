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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.renderButton = this.renderButton.bind(this);
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

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  titleInput(title, onChange) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  subtitleInput(subtitle, onChange) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageInput(imagePath, onChange) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  storylineInput(storyline, onChange) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  ratingInput(rating, onChange) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  genreInput(genre, onChange) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton(onClick) {
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
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title, this.onChangeHandler)}
        {this.subtitleInput(subtitle, this.onChangeHandler)}
        {this.imageInput(imagePath, this.onChangeHandler)}
        {this.storylineInput(storyline, this.onChangeHandler)}
        {this.ratingInput(rating, this.onChangeHandler)}
        {this.genreInput(genre, this.onChangeHandler)}
        {this.renderButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
