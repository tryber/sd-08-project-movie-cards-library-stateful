import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  titleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
      </label>
    );
  }

  imageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
      </label>
    );
  }

  storylineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
      </label>
    );
  }

  genreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          value={ genre }
          onChange={ (event) => this.setState({ genre: event.target.value }) }
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imageInput(imagePath) }
        { this.storylineInput(storyline) }
        { this.ratingInput(rating) }
        { this.genreInput(genre) }
        <button type="submit" onClick={ this.handleSubmit } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
