import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubtitleMovie from './SubtitleMovie';
import TitleMovie from './TitleMovie';
import ImageMovie from './ImageMovie';
import StorylineMovie from './StorylineMovie';
import RatingMovie from './RatingMovie';
import SelectGenreMovie from './SelectGenreMovie';
import ButtonSubmitMovie from './ButtonSubmitMovie';

class AddMovie extends Component {
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
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    const { onClick } = this.props;
    onClick(event);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleMovie value={ title } handleChange={ this.handleChange } />
        <SubtitleMovie value={ subtitle } handleChange={ this.handleChange } />
        <ImageMovie value={ imagePath } handleChange={ this.handleChange } />
        <StorylineMovie value={ storyline } handleChange={ this.handleChange } />
        <RatingMovie value={ rating } handleChange={ this.handleChange } />
        <SelectGenreMovie value={ genre } handleChange={ this.handleChange } />
        <ButtonSubmitMovie handleReset={ this.handleReset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
