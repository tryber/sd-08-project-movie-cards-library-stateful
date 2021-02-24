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

    this.handleChange = this.handleChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.inputText = this.inputText.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImage = this.inputImage.bind(this);
    this.inputTextArea = this.inputTextArea.bind(this);
    this.inputNumber = this.inputNumber.bind(this);
    this.selectForm = this.selectForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onClickButton(event) {
    event.preventDefault();
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    const newMovie = { genre,
      imagePath,
      rating,
      storyline,
      subtitle,
      title,
    };
    onClick(newMovie);
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputText(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ callback }
          data-testid="title-input"
          id="title-input"
        />
      </label>
    );
  }

  inputSubtitle(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ callback }
          data-testid="subtitle-input"
          id="subtitle-input"
        />
      </label>
    );
  }

  inputImage(callback) {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ callback }
          data-testid="image-input"
          id="image-input"
        />
      </label>
    );
  }

  inputTextArea(callback) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ callback }
          data-testid="storyline-input"
          id="storyline-input"
        />
      </label>
    );
  }

  inputNumber(callback) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ callback }
          data-testid="rating-input"
          id="rating-input"
        />
      </label>
    );
  }

  selectForm(callback) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
          id="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" onSubmit={ this.onClickButton }>
        { this.inputText(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImage(this.handleChange) }
        { this.inputTextArea(this.handleChange) }
        { this.inputNumber(this.handleChange) }
        { this.selectForm(this.handleChange) }
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.onClickButton }
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
