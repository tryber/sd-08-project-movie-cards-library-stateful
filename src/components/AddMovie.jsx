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
    this.textInput = this.textInput.bind(this);
    this.textAreaInput = this.textAreaInput.bind(this);
    this.numberInput = this.numberInput.bind(this);
    this.selectInput = this.selectInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: (name === 'rating' ? Number(value) : value),
    });
  }

  textInput(name, label) {
    const value = this.state;
    const nameState = (name === 'image' ? 'imagePath' : name);
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        {label}
        <input
          type="text"
          value={ value[nameState] }
          id={ `${name}-input` }
          data-testid={ `${name}-input` }
          name={ nameState }
          onChange={ this.onChange }
        />
      </label>
    );
  }

  textAreaInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          id="storyline-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  numberInput() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.onChange }
        />
      </label>
    );
  }

  selectInput() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          id="genre-input"
          name="genre"
          onChange={ this.onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  submitForm(e) {
    e.preventDefault();
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

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.textInput('title', 'Título')}
        {this.textInput('subtitle', 'Subtítulo')}
        {this.textInput('image', 'Imagem')}
        {this.textAreaInput()}
        {this.numberInput()}
        {this.selectInput()}
        <button
          onClick={ this.submitForm }
          type="submit"
          data-testid="send-button"
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
