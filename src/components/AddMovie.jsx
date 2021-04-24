import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    console.log(target.name, target.value);
  }

  title(handler, title) {
    return (
      <Input
        onChangeFunction={ handler }
        name="title"
        type="text"
        labelText="Título"
        datadolabel="title-input-label"
        datadoinput="title-input"
        value={ title }
      />
    );
  }

  subtitle(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="subtitle"
        type="text"
        labelText="Subtítulo"
        datadolabel="subtitle-input-label"
        datadoinput="subtitle-input"
        value={ a }
      />
    );
  }

  image(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="imagePath"
        type="text"
        labelText="Imagem"
        datadolabel="image-input-label"
        datadoinput="image-input"
        value={ a }
      />
    );
  }

  sinopse(storyline, func) {
    return (
      <label htmlFor="story" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ func }
        />
      </label>
    );
  }

  number(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="rating"
        type="number"
        labelText="Avaliação"
        datadolabel="rating-input-label"
        datadoinput="rating-input"
        value={ a }
      />
    );
  }

  selectGenre(callback, a) {
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ a }
          onChange={ callback }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  button(callback) {
    return (
      <button
        onClick={ callback }
        data-testid="send-button"
        type="button"
      >
        Adicionar filme
      </button>);
  }

  submitButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const {
      'title-input': title, 'subtitle-input': subtitle,
      'storyline-input': storyline, 'rating-input': rating,
      'genre-input': genre, 'image-input': imagePath, bookmarked,
    } = this.state;
    onClick({
      bookmarked, genre, imagePath, rating, storyline, subtitle, title,
    });
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {this.title(this.onChangeHandler, title)}
        {this.subtitle(this.onChangeHandler, subtitle)}
        {this.image(this.onChangeHandler, imagePath)}
        {this.sinopse(storyline, this.onChangeHandler)}
        {this.number(this.onChangeHandler, rating)}
        {this.selectGenre(this.onChangeHandler, genre)}
        {this.button(this.submitButton)}
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
