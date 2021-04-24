import React from 'react';
import PropTypes from 'prop-types';

import Genero from './Genero';
import Avaliacao from './Avaliaçao';
import Sinopse from './Sinopse';
import Imagem from './Image';
import Subtitulo from './Subtitulo';
import Title from './Titulo';
import AddMovieBttn from './AddMovieBttn';

class AddMovie extends React.Component {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title onChange={ this.handleState } value={ title } />
          <Subtitulo onChange={ this.handleState } value={ subtitle } />
          <Imagem onChange={ this.handleState } value={ imagePath } />
          <Sinopse onChange={ this.handleState } value={ storyline } />
          <Avaliacao onChange={ this.handleState } value={ rating } />
          <Genero onChange={ this.handleState } value={ genre } />
          <AddMovieBttn onClick={ onClick } handleClick={ this.handleClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
