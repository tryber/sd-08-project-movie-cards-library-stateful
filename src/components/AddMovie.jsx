import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  initialState() {
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
  }

  inputText(dataTestId, label, name, value) {
    const labelTestId = `${dataTestId}-label`;
    return (
      <label data-testid={ labelTestId } htmlFor={ name }>
        { label }
        <input
          data-testid={ dataTestId }
          type="text"
          name={ name }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  storyLineInput(dataTestId, label, name, value) {
    const labelTestId = `${dataTestId}-label`;
    return (
      <label data-testid={ labelTestId } htmlFor={ name }>
        { label }
        <textarea
          data-testid={ dataTestId }
          name={ name }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingElement(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
          id="genre-input"
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
        { this.inputText('title-input', 'Título', 'title', title) }
        { this.inputText('subtitle-input', 'Subtítulo', 'subtitle', subtitle) }
        { this.inputText('image-input', 'Imagem', 'imagePath', imagePath) }
        { this.storyLineInput('storyline-input', 'Sinopse', 'storyline', storyline)}
        { this.ratingElement(rating) }
        { this.selectInput(genre) }
        <button type="button" data-testid="send-button" onClick={ this.initialState }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
