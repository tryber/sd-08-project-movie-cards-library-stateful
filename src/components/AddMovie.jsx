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

    this.handleChanges = this.handleChanges.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
        <AddTituloMovie value={ title } handleChange={ this.handleChanges } />
        <AddSubtituloMovie value={ subtitle } handleChange={ this.handleChanges } />
        <AddImageMovie value={ imagePath } handleChange={ this.handleChanges } />
        <AddSinopseMovie value={ storyline } handleChange={ this.handleChanges } />
        <AddAvaliacaoMovie value={ rating } handleChange={ this.handleChanges } />
        <AddGeneroMovie value={ genre } handleChange={ this.handleChanges } />
        <ButtonAddMovie handleReset={ this.handleReset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
