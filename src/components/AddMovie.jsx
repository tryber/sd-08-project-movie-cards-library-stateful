import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImageInput = this.renderImageInput.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderGenderInput = this.renderGenderInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
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

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
          id="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
          id="image-input"
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
          id="rating-input"
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenderInput() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
          id="genre-input"
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineInput()}
        {this.renderRatingInput()}
        {this.renderGenderInput()}
        <button type="submit" onClick={ this.handleSubmit } data-testid="send-button">
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
