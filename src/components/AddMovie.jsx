import React from 'react';

import PropTypes from 'prop-types';

import Titulo from './titulo';
import SubTitulo from './subtitulo';
import Image from './image';
import Sinopse from './sinopse';
import Avaliacao from './Avaliacao';
import Genero from './genero';
import Botao from './botao';

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

    this.onChangeAction = this.onChangeAction.bind(this);
    this.botaoCliqued = this.botaoCliqued.bind(this);
  }

  onChangeAction(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  botaoCliqued() {
    const { onClick } = this.props;
    onClick(this.state);

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
        <Titulo value={ title } onChange={ this.onChangeAction } />
        <SubTitulo value={ subtitle } onChange={ this.onChangeAction } />
        <Image value={ imagePath } onChange={ this.onChangeAction } />
        <Sinopse value={ storyline } onChange={ this.onChangeAction } />
        <Avaliacao value={ rating } onChange={ this.onChangeAction } />
        <Genero value={ genre } onChange={ this.onChangeAction } />
        <Botao onClick={ this.botaoCliqued } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
