// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import AddTituloMovie from './AddMovie/AddTituloMovie';
import AddSubtituloMovie from './AddMovie/AddSubtituloMovie';
import AddImageMovie from './AddMovie/AddImageMovie';
import AddSinopseMovie from './AddMovie/AddSinopseMovie';
import AddAvaliacaoMovie from './AddMovie/AddAvaliacaoMovie';
import AddGeneroMovie from './AddMovie/AddGeneroMovie';
import ButtonAddMovie from './AddMovie/ButtonAddMovie';

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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSub = this.handleChangeSub.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSinopse = this.handleChangeSinopse.bind(this);
    this.handleChangeAvaliacao = this.handleChangeAvaliacao.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSub(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleChangeImage(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleChangeSinopse(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleChangeAvaliacao(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleChangeGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });

    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTituloMovie value={ title } handleChange={ this.handleChangeTitle } />
        <AddSubtituloMovie value={ subtitle } handleChange={ this.handleChangeSub } />
        <AddImageMovie value={ imagePath } handleChange={ this.handleChangeImage } />
        <AddSinopseMovie value={ storyline } handleChange={ this.handleChangeSinopse } />
        <AddAvaliacaoMovie value={ rating } handleChange={ this.handleChangeAvaliacao } />
        <AddGeneroMovie value={ genre } handleChange={ this.handleChangeGenre } />
        <ButtonAddMovie handleReset={ this.handleReset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
