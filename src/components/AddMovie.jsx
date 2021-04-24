import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddMovie.css';
class AddMovie extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleState(event) {
    const { name } = event.target;
    const value = (name !== 'rating') ? event.target.value : Number(event.target.value);
    this.setState({ [name]: value });
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

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" className="form-class">
          <label htmlFor="title" data-testid="title-input-label" className="label">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleState}
            data-testid="title-input"
            className="text-input"
          />

          <label htmlFor="subtitle" data-testid="subtitle-input-label" className="label">
            Subtítulo
          </label>
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleState}
            data-testid="subtitle-input"
          />

          <label htmlFor="imagePath" data-testid="image-input-label" className="label">
            Imagem
          </label>
          <input
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleState}
            data-testid="image-input"
          />

          <label htmlFor="storyline" data-testid="storyline-input-label" className="label">
            Sinopse
          </label>
          <textarea
            type="text-area"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleState}
            data-testid="storyline-input"
          />

          <label htmlFor="rating" data-testid="rating-input-label" className="label">
            Avaliação
          </label>
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleState}
            data-testid="rating-input"
          />

          <label htmlFor="genre" data-testid="genre-input-label" className="label">
            Gênero
          </label>
          <select
            type=""
            name="genre"
            value={this.state.genre}
            onChange={this.handleState}
            data-testid="genre-input"
            className="select-input"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.handleClick(this.props.onClick);
            }}
            data-testid="send-button"
            className="button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
