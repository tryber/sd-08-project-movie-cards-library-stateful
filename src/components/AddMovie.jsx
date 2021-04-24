// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const firstState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = firstState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.passMovie = this.passMovie.bind(this);
    this.creatLabelTitle = this.creatLabelTitle.bind(this);
    this.creatLabelSubtitle = this.creatLabelSubtitle.bind(this);
    this.creatLabelImage = this.creatLabelImage.bind(this);
    this.creatLabelStory = this.creatLabelStory.bind(this);
    this.creatLabelRating = this.creatLabelRating.bind(this);
    this.creatLabelGenre = this.creatLabelGenre.bind(this);
  }

  handleChange(event, name) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  resetState() {
    this.setState(firstState);
  }

  passMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  creatLabelTitle(name, value, text, type = 'text') {
    return (
      <label htmlFor={ name } data-testid="title-input-label">
        { text }
        <input
          type={ type }
          name={ name }
          data-testid="title-input"
          value={ value }
          onChange={ (elem) => this.handleChange(elem, name) }
        />
      </label>
    );
  }

  creatLabelSubtitle(name, value, text, type = 'text') {
    return (
      <label htmlFor={ name } data-testid="subtitle-input-label">
        { text }
        <input
          type={ type }
          name={ name }
          data-testid="subtitle-input"
          value={ value }
          onChange={ (elem) => this.handleChange(elem, name) }
        />
      </label>
    );
  }

  creatLabelImage(name, value, text, type = 'text') {
    return (
      <label htmlFor={ name } data-testid="image-input-label">
        { text }
        <input
          type={ type }
          name={ name }
          data-testid="image-input"
          value={ value }
          onChange={ (elem) => this.handleChange(elem, name) }
        />
      </label>
    );
  }

  creatLabelStory(name, value, text, type = 'text') {
    return (
      <label htmlFor={ name } data-testid="storyline-input-label">
        { text }
        <textarea
          type={ type }
          name={ name }
          data-testid="storyline-input"
          value={ value }
          onChange={ (elem) => this.handleChange(elem, name) }
        />
      </label>
    );
  }

  creatLabelRating(name, value, text, type = 'number') {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        { text }
        <input
          type={ type }
          name={ name }
          data-testid="rating-input"
          value={ value }
          max="5"
          min="0"
          step="0.1"
          onChange={ (elem) => this.handleChange(elem, name) }
        />
      </label>
    );
  }

  creatLabelGenre(name, value, text, type = 'text') {
    return (
      <label htmlFor={ name } data-testid="genre-input-label">
        { text }
        <select
          type={ type }
          name={ name }
          data-testid="genre-input"
          value={ value }
          onChange={ (elem) => this.handleChange(elem, name) }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.creatLabelTitle('title', title, 'Título')}
        {this.creatLabelSubtitle('subtitle', subtitle, 'Subtítulo')}
        {this.creatLabelImage('imagePath', imagePath, 'Imagem')}
        {this.creatLabelStory('storyline', storyline, 'Sinopse')}
        {this.creatLabelRating('rating', rating, 'Avaliação')}
        {this.creatLabelGenre('genre', genre, 'Gênero')}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.passMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
