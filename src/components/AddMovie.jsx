import React from 'react';
import propTypes from 'prop-types';

import InputTitle from './addMovieComponents/InputTitle';
import InputSubtitle from './addMovieComponents/InputSubtitle';
import InputImage from './addMovieComponents/InputImage';
import TextAreaSinopse from './addMovieComponents/TextAreaSinopse';
import RatingMovie from './addMovieComponents/RatingMovie';
import Genre from './addMovieComponents/Genre';
import ButtonAddMovie from './addMovieComponents/ButtonAddMovie';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(event);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <TextAreaSinopse value={ storyline } onChange={ this.handleChange } />
        <RatingMovie value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <ButtonAddMovie onClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};
