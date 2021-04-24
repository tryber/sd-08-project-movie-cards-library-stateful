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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearDataMovie = this.clearDataMovie.bind(this);
  }

  //  inspirado no codigo da patricia https://github.com/tryber/sd-08-project-movie-cards-library-stateful/pull/46/files?file-filters%5B%5D=.jsx
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    // event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.clearDataMovie();
  }

  clearDataMovie() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  TitleInput(title) {
    return (
      <div>
        <label
          htmlFor="text-input"
          data-testid="title-input-label"
        >
          Título
          <input
            id="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }

  SubtitleInput(subtitle) {
    return (
      <div>
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }

  ImageInput(imagePath) {
    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
          <input
            name="imagePath"
            id="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }

  StorylineInput(storyline) {
    return (
      <div>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }

  RatingInput(rating) {
    return (
      <div>
        <label
          htmlFor="number-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            id="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }

  GenreSelect(genre) {
    return (
      <label htmlFor="genre-select" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.TitleInput(title)}
        {this.SubtitleInput(subtitle)}
        {this.ImageInput(imagePath)}
        {this.StorylineInput(storyline)}
        {this.RatingInput(rating)}
        {this.GenreSelect(genre)}
        <button
          type="button"
          data-testid="send-button"
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
