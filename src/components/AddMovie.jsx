import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SearchBar from './SearchBar';
// import MovieList from './MovieList';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.theTitle = this.theTitle.bind(this);
    this.theSubTitle = this.theSubTitle.bind(this);
    this.theImagePath = this.theImagePath.bind(this);
    this.theSinopsis = this.theSinopsis.bind(this);
    this.theRating = this.theRating.bind(this);
    this.theButton = this.theButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookMarked: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  theTitle() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  theSubTitle() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  theImagePath() {
    const { imagePath } = this.state;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  theSinopsis() {
    const { storyline } = this.state;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  theRating() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            max={ 5 }
          />
        </label>
      </div>
    );
  }

  theGenre() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  addNReset(onClick) {
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

  theButton() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => { event.preventDefault(); this.addNReset(onClick); } }
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <h2> My awesome movie library </h2>
        <section>
          {this.theTitle()}
          {this.theSubTitle()}
          {this.theImagePath()}
          {this.theSinopsis()}
          {this.theRating()}
          {this.theGenre()}
          {this.theButton() }
        </section>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
