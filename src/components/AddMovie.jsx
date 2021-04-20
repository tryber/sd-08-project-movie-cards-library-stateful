import React from 'react';
import PropTypes from 'prop-types';

import InputAddImage from './smallerComponents/InputAddImage';
import InputAddMovie from './smallerComponents/InputAddMovie';
import InputAddNumber from './smallerComponents/InputAddNumber';
import InputAddSelect from './smallerComponents/InputAddSelect';
import InputAddSubtitle from './smallerComponents/InputAddSubtitle';
import InputAddTextArea from './smallerComponents/InputAddTextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovieSubmit = this.addMovieSubmit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovieSubmit(event) {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
    event.preventDefault();
  }

  renderFormOne() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <InputAddMovie
          value={ title }
          handleChange={ this.handleChange }
        />
        <InputAddSubtitle
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <InputAddImage
          value={ imagePath }
          handleChange={ this.handleChange }
        />
      </div>
    );
  }

  renderFormTwo() {
    const { storyline, rating, genre } = this.state;
    return (
      <div>
        <InputAddTextArea
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <InputAddNumber
          value={ rating }
          handleChange={ this.handleChange }
        />
        <InputAddSelect
          value={ genre }
          handleChange={ this.handleChange }
        />
      </div>
    );
  }

  renderFormThree() {
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addMovieSubmit }
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderFormOne()}
        {this.renderFormTwo()}
        {this.renderFormThree()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
