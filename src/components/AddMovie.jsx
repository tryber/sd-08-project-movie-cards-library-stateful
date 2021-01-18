// implement AddMovie component here
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  async handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    await this.handleReset();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" name="title" id="title-input" value={ title } onChange={ this.handleChange } data-testid="title-input" />
          </label>
        </div>

        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="subtitle" id="subtitle-input" value={ subtitle } onChange={ this.handleChange } data-testid="subtitle-input" />
          </label>
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input name="imagePath" type="text" value={ imagePath } alt={ subtitle } data-testid="image-input" onChange={ this.handleChange } />
          </label>
        </div>
        <div>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ storyline }
              name="storyline"
              id="storyline-input"
              cols="30"
              rows="10"
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="rating"
            data-testid="rating-input-label"
          >
            Avaliação
            <input type="number" name="rating" id="rating-input" value={ rating } data-testid="rating-input" onChange={ this.handleChange } />
          </label>
        </div>
        <div>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select name="genre" id="select-input" value={ genre } onChange={ this.handleChange } data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit" onClick={ this.handleClick } data-testid="send-button">Adicionar filme</button>
        </div>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
