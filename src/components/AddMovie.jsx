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
    this.baseState = this.state;
    this.changeHandler = this.changeHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  newTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.changeHandler }
          name="title"
        />
      </label>
    );
  }

  newSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.changeHandler }
          name="subtitle"
        />
      </label>
    );
  }

  newImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.changeHandler }
          name="imagePath"
        />
      </label>
    );
  }

  newSynopsis() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.changeHandler }
          name="storyline"
        />
      </label>
    );
  }

  newRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.changeHandler }
          name="rating"
        />
      </label>
    );
  }

  newGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.changeHandler }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addMovieForm() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => { event.preventDefault(); this.resetForm(); } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.newTitle() }
        { this.newSubtitle() }
        { this.newImage() }
        { this.newSynopsis() }
        { this.newRating() }
        { this.newGenre() }
        { this.addMovieForm() }
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
