import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action'
    // };
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  //          event.target
  handleChange({ target }) {
    const { type, name, value } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({ [name]: newValue });
  }

  handleClear() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      ...initialState,
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTextarea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          data-testid="rating-input"
          // defaultValue={ 0 }
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          id="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    // const onClick = this.props.onClick;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.handleClear }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderTextarea() }
        { this.renderRating() }
        { this.renderSelect() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
