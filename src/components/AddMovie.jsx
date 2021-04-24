// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const resetState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
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
    this.changeHandler = this.changeHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.titleCreator = this.titleCreator.bind(this);
    this.inputCreator = this.inputCreator.bind(this);
    this.imageCreator = this.imageCreator.bind(this);
    this.storylineCreator = this.storylineCreator.bind(this);
    this.ratingCreator = this.ratingCreator.bind(this);
    this.selectCreator = this.selectCreator.bind(this);
    this.buttonCreator = this.buttonCreator.bind(this);
  }

  changeHandler({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  resetHandler() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      ...resetState,
    });
  }

  titleCreator() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ this.changeHandler }
          data-testid="title-input"
        />
      </label>
    );
  }

  inputCreator() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.changeHandler }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageCreator() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.changeHandler }
          data-testid="image-input"
        />
      </label>
    );
  }

  storylineCreator() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ this.changeHandler }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  ratingCreator() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.changeHandler }
          data-testid="rating-input"
        />
      </label>
    );
  }

  selectCreator() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          name="genre"
          onChange={ this.changeHandler }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  buttonCreator() {
    return (
      <button
        type="button"
        onClick={ this.resetHandler }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          {this.titleCreator()}
          {this.inputCreator()}
          {this.imageCreator()}
          {this.storylineCreator()}
          {this.ratingCreator()}
          {this.selectCreator()}
          {this.buttonCreator()}
        </form>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
