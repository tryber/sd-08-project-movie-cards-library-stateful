import React from 'react';

import PropTypes from 'prop-types';

import Titulo from './formulario/titulo';
import SubTitulo from './formulario/subtitulo';
import Image from './formulario/image';
import Sinopse from './formulario/sinopse';
import Avaliacao from './formulario/avaliacao';
import Genero from './formulario/genero';
import Botao from './formulario/botao';

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
      <form data-testid="add-movie-form">
        <Titulo value={ title } onChange={ this.onChangeAction } />
        <SubTitulo value={ subtitle } onChange={ this.onChangeAction } />
        <Image value={ imagePath } onChange={ this.onChangeAction } />
        <Sinopse value={ storyline } onChange={ this.onChangeAction } />
        <Avaliacao value={ rating } onChange={ this.onChangeAction } />
        <Genero value={ genre } onChange={ this.onChangeAction } />
        <Botao value={ this.state } onClick={ onClick } onClick2={ this.botaoCliqued } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
