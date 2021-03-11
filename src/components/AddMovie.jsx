import React from 'react';
import PropTypes from 'prop-types';

import TitleAddMovie from './AddMovie/TitleAddMovie';
import SubtitleAddMovie from './AddMovie/SubtitleAddMovie';
import ImageAddMovie from './AddMovie/ImageAddMovie';
import TextAreaAddMovie from './AddMovie/TextAreaAddMovie';
import RatingAddMovie from './AddMovie/RatingAddMovie';
import SelectAddMovie from './AddMovie/SelectAddMovie';
import ButtonAddMovie from './AddMovie/ButtonAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({
      title: '',
      subtitle: '',
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
        <TitleAddMovie value={ title } handleChange={ this.handleChange } />
        <SubtitleAddMovie value={ subtitle } handleChange={ this.handleChange } />
        <ImageAddMovie value={ imagePath } handleChange={ this.handleChange } />
        <TextAreaAddMovie value={ storyline } handleChange={ this.handleChange } />
        <RatingAddMovie value={ rating } handleChange={ this.handleChange } />
        <SelectAddMovie value={ genre } handleChange={ this.handleChange } />
        <ButtonAddMovie handleReset={ this.handleReset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
