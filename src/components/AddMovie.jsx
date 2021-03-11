import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyLine: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
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
      storyLine: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  clearInputs(event) {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      storyLine: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
    const { onClick } = this.props;
    onClick(this.state);
  }

  renderInputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor={ title } data-testid="title-input-label" className="label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
          className="input"
        />
      </label>
    );
  }

  renderInputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor={ subtitle }
        data-testid="subtitle-input-label"
        className="label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
          className="input"
        />
      </label>
    );
  }

  renderInputImage() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor={ imagePath }
        data-testid="image-input-label"
        className="label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
          className="input"
        />
      </label>
    );
  }

  renderInputRating() {
    const { rating } = this.state;
    return (
      <label
        htmlFor={ rating }
        data-testid="rating-input-label"
        className="label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
          className="input"
        />
      </label>
    );
  }

  renderTextarea() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
        className="label"
      >
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
          className="textarea"
        />
      </label>
    );
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label" className="label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ genre }
          onChange={ this.handleChange }
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

  renderButton() {
    return (
      <button
        type="submit"
        onClick={ this.clearInputs }
        data-testid="send-button"
        className="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" className="form">
        {this.renderInputTitle()}
        {this.renderInputSubtitle()}
        {this.renderInputImage()}
        {this.renderTextarea()}
        {this.renderInputRating()}
        {this.renderSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
