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

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.clearData();
  }

  clearData() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTitle(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          id="title-input"
          data-testid="title-input"
          name="title"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  inputSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.onChange }
          name="subtitle"
          type="text"
        />
      </label>
    );
  }

  inputImage(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.onChange }
          name="imagePath"
          type="text"
        />
      </label>
    );
  }

  inputStoryLine(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.onChange }
          name="storyline"
        />
      </label>
    );
  }

  inputRating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.onChange }
          name="rating"
          type="number"
        />
      </label>
    );
  }

  inputGenre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.onChange }
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle(title)}
        {this.inputSubtitle(subtitle)}
        {this.inputImage(imagePath)}
        {this.inputStoryLine(storyline)}
        {this.inputRating(rating)}
        {this.inputGenre(genre)}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submit }
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
