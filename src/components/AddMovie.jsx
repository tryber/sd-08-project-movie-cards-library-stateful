// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
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
    const { name, type } = target;
    const value = type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const movie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    };
    onClick(movie);
    this.resetState();
  }

  resetState() {
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
        <InputTitle func={ this.handleChange } title={ title } />
        <InputSubtitle func={ this.handleChange } subtitle={ subtitle } />
        <InputImage func={ this.handleChange } image={ imagePath } />
        <InputTextArea func={ this.handleChange } storyline={ storyline } />
        <InputNumber func={ this.handleChange } rating={ rating } />
        <InputSelect func={ this.handleChange } genre={ genre } />
        <ButtonAddMovie func={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
