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
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  // tentando fazer um formulário controlado, para esvaziar o state dele.
  // copiei o a const initialState do addMovie.test p deixar um estado inicial
  // fiz o destructuring. p popular de propriedades, spread. o estado começa c isso
  // pegando o nome do input e transformando em objeto p guardar as infos
  // dica PS.

  handleChange({ target }) {
    const { type, name, value } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({ [name]: newValue });
  }
  // essa função é p pegar o elemento 'target' e
  // desestruturar ele, type, name e valor.
  // value é uma string, necessário q qdo ela seja numero, seja transformado
  // newValue, verifica se o tipo é number e por ternário transforma em number.

  handleClear() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      ...initialState,
    });
  }

  // pegar o estado e reiniciar ele para o inicial.
  // this.setState => reset p initialState
  // pega o onclick que vem por props do button, chamo ele com o state e não mais com o event
  // task14 e task 19
  // e faço a ação de setar o state on click, no event do click. - dica PS. Plantão

  renderTitles() {
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

  renderSubTitles() {
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

  // tds componentes passam, e é necessários desestruturar e pegar a
  // prop do state inicial
  // handlechange - onchange - bind.

  renderImages() {
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

  renderSynopsis() {
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

  renderAssessmentRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // dica defaultValue PSimões - Revisão - mudei - handleChange e onchange
  // utilizei o value pq ele começa com 0 da mesma forma, no state.
  // PS tbm deu essa dica na revisão.

  renderMovieGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          type="number"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.handleClear }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.renderTitles() }
          { this.renderSubTitles() }
          { this.renderImages() }
          { this.renderSynopsis() }
          { this.renderAssessmentRating() }
          { this.renderMovieGenre() }
          { this.renderButton() }
        </form>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
