import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      titleText: '',
      subtitleText: '',
      image: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  createTitle() {
    const { titleText } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleText">
        Título
        <input
          type="text"
          value={ titleText }
          data-testid="title-input"
          onChange={ this.updateState }
          id="titleText"
        />
      </label>
    );
  }

  createSubtitle() {
    const { subtitleText } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleText">
        Subtítulo
        <input
          type="text"
          value={ subtitleText }
          data-testid="subtitle-input"
          onChange={ this.updateState }
          id="subtitleText"
        />
      </label>
    );
  }

  createImage() {
    const { image } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          type="text"
          value={ image }
          data-testid="image-input"
          onChange={ this.updateState }
          id="image"
        />
      </label>
    );
  }

  createStoryLine() {
    const { storyLine } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ this.updateState }
          id="storyLine"
        />
      </label>
    );
  }

  createRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.updateState }
          id="rating"
        />
      </label>
    );
  }

  createSelect() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          onChange={ this.updateState }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  createButton() {
    const { onClick } = this.props;
    return (
      <button
        style={ { width: '200px' } }
        type="reset"
        data-testid="send-button"
        onClick={ () => {
          onClick();
          this.resetState();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  updateState(e) {
    const keyName = e.target.id;
    const t = e.target.id === 'rating' ? parseFloat(e.target.value) : e.target.value;
    this.setState({
      [keyName]: t,
    });
  }

  resetState() {
    this.setState({
      titleText: '',
      subtitleText: '',
      image: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.createTitle() }
        { this.createSubtitle() }
        { this.createImage() }
        { this.createStoryLine() }
        { this.createRating() }
        { this.createSelect() }
        { this.createButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
