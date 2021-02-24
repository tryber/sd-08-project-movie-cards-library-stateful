import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.restoreState = this.restoreState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  // restoreState () {
  //   this.setState({
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action'
  //   })
  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  restoreState(callback) {
    callback();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle = () => {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          name="title"
          onChange={ this.handleChange }
          id="title"
        />
      </label>
    );
  }

  renderSubTitle = () => {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="sub-title">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
          id="sub-title"
        />
      </label>
    );
  }

  renderImage = () => {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          name="imagePath"
          onChange={ this.handleChange }
          id="image"
        />
      </label>
    );
  }

  renderStoryline = () => {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
          id="storyline"
          cols="30"
          rows="3"
        />
      </label>
    );
  }

  renderRating = () => {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          name="rating"
          onChange={ this.handleChange }
          id="rating"
        />
      </label>
    );
  }

  renderGenre = () => {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          name="genre"
          onChange={ this.handleChange }
          id="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton = () => {
    const { onClick } = this.props;
    // <button data-testid="send-button" onClick={() => onClick(this.restoreState, this.state)}
    //     type="submit"
    //     >
    //     Adicionar filme
    //     </button>
    return (
      <button
        data-testid="send-button"
        onClick={ () => this.restoreState(() => onClick(this.state)) }
        type="submit"
      >
        Adicionar filme
      </button>);
  }

  render() {
    return (
      <form
        data-testid="add-movie-form"
        onSubmit={ this.handleSubmit }
      >
        {this.renderTitle()}
        {this.renderSubTitle()}
        {this.renderImage()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => 'teste',
};

export default AddMovie;
