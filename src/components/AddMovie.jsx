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
    this.renderButton = this.renderButton.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleChange(callback) {
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

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }

  renderSubTitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }

  renderStory() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="text"
          value={ storyline }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.onChangeHandler }
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
        data-testid="send-button"
        type="submit"
        onClick={ (event) => { event.preventDefault(); this.handleChange(onClick); } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle(title, this.onChangeHandler)}
        {this.renderSubTitle(subtitle, this.onChangeHandler)}
        {this.renderImage(imagePath, this.onChangeHandler)}
        {this.renderStory(storyline, this.onChangeHandler)}
        {this.renderRating(rating, this.onChangeHandler)}
        {this.renderGenre(genre, this.onChangeHandler)}
        {this.renderButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
