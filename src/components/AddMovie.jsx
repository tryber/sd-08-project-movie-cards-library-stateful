import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      sinopse: '',
      rating: 0,
      image: '',
      gender: 'action',
    };
  }

  handleChange({ target }) {
    this.setState(
      { [target.name]: target.value },
    );
  }

  submit(event) {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      sinopse: '',
      rating: 0,
      image: '',
      gender: '',
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          onChange={ this.handleChange }
          value={ title }
          name="title"
          data-testid="title-input"
          id="title"
          type="text"
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          onChange={ this.handleChange }
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          id="subtitle"
          type="text"
        />
      </label>
    );
  }

  inputImage() {
    const { image } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          onChange={ this.handleChange }
          value={ image }
          name="image"
          data-testid="image-input"
          id="image"
          type="text"
        />
      </label>
    );
  }

  inputSinopse() {
    const { sinopse } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          value={ sinopse }
          onChange={ this.handleChange }
          data-testid="storyline-input"
          name="sinopse"
          id="sinopse"
          cols="30"
          rows="5"
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          onChange={ this.handleChange }
          value={ rating }
          name="rating"
          data-testid="rating-input"
          id="rating"
          type="number"
          defaultValue="0"
        />
      </label>
    );
  }

  inputSelect() {
    const { gender } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="gender">
        Gênero
        <select
          onChange={ this.handleChange }
          value={ gender }
          data-testid="genre-input"
          name="gender"
          id="gender"
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
      <div>
        <form data-testid="add-movie-form" action="">
          {this.inputTitle()}
          {this.inputSubtitle()}
          {this.inputImage()}
          {this.inputSinopse()}
          {this.inputRating()}
          {this.inputSelect()}
          <button data-testid="send-button" type="submit" onClick={ this.submit }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
