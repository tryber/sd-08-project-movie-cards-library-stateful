import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let { value } = target;
    if (name === 'rating') value = parseFloat(value);
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderInput(text, name, value, handleChange) {
    const testName = name === 'imagePath' ? 'image' : name;
    const type = name === 'rating' ? 'number' : 'text';
    return (
      <label htmlFor={ name } data-testid={ `${testName}-input-label` } className="label">
        {text}
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ `${testName}-input` }
          step={ 0.1 }
          max={ 5 }
          min={ 0 }
          className="input"
        />
      </label>
    );
  }

  renderTextarea(value, handleChange) {
    const maxLength = 190;
    const error = value.length >= maxLength ? 'Sinopse maior que 190 caracteres!' : '';
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label" className="label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
          maxLength={ 190 }
          className="textarea"
        />
        <span style={ { color: 'red' } }>{error}</span>
      </label>
    );
  }

  renderSelect(name, handleChange) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label" className="label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ name }
          onChange={ handleChange }
          data-testid="genre-input"
          className="input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton(onClick) {
    return (
      <button
        type="button"
        onClick={ () => this.handleClick(onClick) }
        data-testid="send-button"
        className="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form">
        {this.renderInput('Título', 'title', title, this.handleChange)}
        {this.renderInput('Subtítulo', 'subtitle', subtitle, this.handleChange)}
        {this.renderInput('Imagem', 'imagePath', imagePath, this.handleChange)}
        {this.renderTextarea(storyline, this.handleChange)}
        {this.renderInput('Avaliação', 'rating', rating, this.handleChange)}
        {this.renderSelect(genre, this.handleChange)}
        {this.renderButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
