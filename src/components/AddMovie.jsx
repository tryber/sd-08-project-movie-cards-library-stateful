import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.buttonFunc = this.buttonFunc.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.baseState = this.state;
    // source: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          onChange={ this.handleChange }
          value={ title }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="title-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          onChange={ this.handleChange }
          value={ subtitle }
        />
      </label>
    );
  }

  inputImagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          onChange={ this.handleChange }
          value={ imagePath }
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
          name="storyline"
          onChange={ this.handleChange }
          value={ storyline }
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
          type="number"
          data-testid="rating-input"
          name="rating"
          onChange={ this.handleChange }
          value={ rating }
        />
      </label>
    );
  }

  inputGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          value={ genre }
          type="number"
          data-testid="genre-input"
          name="genre"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  buttonFunc() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
    // source: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
  }

  buttonInput() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.buttonFunc }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
        { this.inputSubtitle() }
        { this.inputImagePath() }
        { this.inputStoryline() }
        { this.inputRating() }
        { this.inputGenre() }
        { this.buttonInput() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
