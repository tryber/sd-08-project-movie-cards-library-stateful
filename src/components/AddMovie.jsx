import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setAtributes = this.setAtributes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderButton = this.renderButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleSubmit(callback) {
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

  setAtributes({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  formInputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          value={ title }
          onChange={ this.setAtributes }
          type="text"
          data-testid="title-input"
        />
      </label>
    );
  }

  formInputSubTitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.setAtributes }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  formImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.setAtributes }
          data-testid="image-input"
        />
      </label>
    );
  }

  formTextArea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.setAtributes }
          data-testid="storyline-input"
          cols="30"
          rows="10"
        />
      </label>
    );
  }

  formInputNumber() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.setAtributes }
          data-testid="rating-input"
        />
      </label>
    );
  }

  formSelectInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.setAtributes }
          data-testid="genre-input"
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
        type="submit"
        data-testid="send-button"
        onClick={ (event) => { event.preventDefault(); this.handleSubmit(onClick); } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.formInputTitle()}
        {this.formInputSubTitle()}
        {this.formImage()}
        {this.formTextArea()}
        {this.formInputNumber()}
        {this.formSelectInput()}
        {this.renderButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;
