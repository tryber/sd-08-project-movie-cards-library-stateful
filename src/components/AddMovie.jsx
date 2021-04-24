import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };

    this.movieHandler = this.movieHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  movieHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addMovie() {
    const newMovie = this.state;
    const { onClick } = this.props;
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    });
    onClick(newMovie);
  }

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          className="inputs"
          type="text"
          name="title"
          value={ title }
          onChange={ this.movieHandler }
        />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          className="inputs"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.movieHandler }
        />
      </label>
    );
  }

  addMovieImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          className="inputs"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.movieHandler }
        />
      </label>
    );
  }

  addMovieStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <br />
        <textarea
          data-testid="storyline-input"
          className="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.movieHandler }
        />
      </label>
    );
  }

  addMovieRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <br />
        <input
          data-testid="rating-input"
          className="inputs"
          type="number"
          name="rating"
          max="5"
          step="0.1"
          value={ rating }
          onChange={ this.movieHandler }
        />
      </label>
    );
  }

  addMovieGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          className="inputs"
          value={ genre }
          onChange={ this.movieHandler }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addMovieButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.addMovie }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.addMovieTitle()}
        {this.addMovieSubtitle()}
        {this.addMovieGenre()}
        {this.addMovieStoryline()}
        {this.addMovieImage()}
        {this.addMovieRating()}
        {this.addMovieButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
