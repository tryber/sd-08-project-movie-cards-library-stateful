import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    this.ModifyState = this.ModifyState.bind(this);
    this.AddTitle = this.AddTitle.bind(this);
    this.AddSubtitle = this.AddSubtitle.bind(this);
    this.AddImg = this.AddImg.bind(this);
    this.AddStoryline = this.AddStoryline.bind(this);
    this.AddRating = this.AddRating.bind(this);
    this.AddGenre = this.AddGenre.bind(this);
    this.AddButton = this.AddButton.bind(this);
    this.ModifyForm = this.ModifyForm.bind(this);
  }

  ModifyState({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  AddTitle(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.ModifyState }
        />
      </label>
    );
  }

  AddSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.ModifyState }
        />
      </label>
    );
  }

  AddImg(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.ModifyState }
        />
      </label>
    );
  }

  AddStoryline(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.ModifyState }
        />
      </label>
    );
  }

  AddRating(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.ModifyState }
        />
      </label>
    );
  }

  AddGenre(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.ModifyState }
          type="number"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  AddButton() {
    return (
      <button type="submit" data-testid="send-button">
        Adicionar filme
      </button>
    );
  }

  resetForm() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  ModifyForm() {
    const { onClick } = this.props;
    onClick();
    this.resetForm();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        action=""
        onSubmit={ this.ModifyForm }
        data-testid="add-movie-form"
        className="form-text"
      >
        {this.AddTitle(title)}
        {this.AddSubtitle(subtitle)}
        {this.AddImg(imagePath)}
        {this.AddStoryline(storyline)}
        {this.AddRating(rating)}
        {this.AddGenre(genre)}
        <this.AddButton />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
