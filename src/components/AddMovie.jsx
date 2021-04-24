// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const defaultMovieState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const renderInput = (type, name, value, onChange) => (
  <label htmlFor={ `AddMovie-${type}` } data-testid={ `${type}-input-label` }>
    {name}
    <input
      id={ `AddMovie-${type === 'image' ? 'imagePath' : type}` }
      type="text"
      value={ value }
      data-testid={ `${type}-input` }
      onChange={ onChange }
    />
  </label>
);

const renderTextArea = (storyline, onChange) => (
  <label htmlFor="storyline" data-testid="storyline-input-label">
    Sinopse
    <textarea
      name=""
      id="AddMovie-storyline"
      cols="30"
      rows="10"
      value={ storyline }
      data-testid="storyline-input"
      onChange={ onChange }
    />
  </label>
);

const renderInputNumber = (rating, onChange) => (
  <label htmlFor="rating" data-testid="rating-input-label">
    Avaliação
    <input
      id="AddMovie-rating"
      type="number"
      value={ rating }
      onChange={ onChange }
      data-testid="rating-input"
    />
  </label>
);

const renderSelect = (genre, onChange) => (
  <label htmlFor="genre" data-testid="genre-input-label">
    Gênero
    <select
      name="genre"
      id="AddMovie-genre"
      data-testid="genre-input"
      onChange={ onChange }
      value={ genre }
    >
      <option value="action" data-testid="genre-option">Ação</option>
      <option value="comedy" data-testid="genre-option">Comédia</option>
      <option value="thriller" data-testid="genre-option">Suspense</option>
    </select>
  </label>
);

const renderButton = (onClick) => (
  <button
    type="button"
    data-testid="send-button"
    onClick={ onClick }
  >
    Adicionar filme
  </button>
);

class AddMovie extends React.Component {
  constructor() {
    super();
    this.refreshState = this.refreshState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick() {
    const newMovie = this.state;
    const { onClick } = this.props;
    newMovie.rating = parseFloat(newMovie.rating);
    onClick(newMovie);
    this.setState(defaultMovieState);
  }

  refreshState(event) {
    this.setState({
      [event.target.id.split('-')[1]]: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {renderInput('title', 'Título', title, this.refreshState)}
        {renderInput('subtitle', 'Subtítulo', subtitle, this.refreshState)}
        {renderInput('image', 'Imagem', imagePath, this.refreshState)}
        {renderTextArea(storyline, this.refreshState)}
        {renderInputNumber(rating, this.refreshState)}
        {renderSelect(genre, this.refreshState)}
        {renderButton(this.onClick)}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
