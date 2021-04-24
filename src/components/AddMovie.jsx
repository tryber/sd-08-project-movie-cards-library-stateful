// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle(title) {
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
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

  renderSubTitle(subtitle) {
    return (
      <div>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
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

  renderImage(imagePath) {
    return (
      <div>
        <label htmlFor="title" data-testid="image-input-label">
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

  renderStoryline(storyline) {
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  renderRating(rating) {
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            step={ 0.1 }
            max={ 5 }
            min={ 0 }
          />
        </label>
      </div>
    );
  }

  renderGenre(genre) {
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.handleClick(onClick) }
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
      <form data-testid="add-movie-form">
        {this.renderTitle(title)}
        {this.renderSubTitle(subtitle)}
        {this.renderImage(imagePath)}
        {this.renderStoryline(storyline)}
        {this.renderRating(rating)}
        {this.renderGenre(genre)}
        {this.renderButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
