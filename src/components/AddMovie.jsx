import React from 'react';
import PropTypes from 'prop-types';

import AddMovieButton from './AddMovieButton';
import AddMovieForm from './AddMovieForm';
import AddMovieInputTitle from './AddMovieInputTitle';
import AddMovieInputSubtitle from './AddMovieInputSubtitle';
import AddMovieInputImagePath from './AddMovieInputImagePath';
import AddMovieTextareaStoryline from './AddMovieTextareaStoryline';
import AddMovieInputRating from './AddMovieInputRating';
import AddMovieSelectGenre from './AddMovieSelectGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.onChangeForm = this.onChangeForm.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeForm({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    const { onClick: onClickMovieLibrary } = this.props;
    this.setState((state) => {
      onClickMovieLibrary(state);
      return {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: '',
      };
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <AddMovieForm
        onChangeForm={ this.onChangeForm }
      >
        <AddMovieInputTitle title={ title } />
        <AddMovieInputSubtitle subtitle={ subtitle } />
        <AddMovieInputImagePath imagePath={ imagePath } />
        <AddMovieTextareaStoryline storyline={ storyline } />
        <AddMovieInputRating rating={ rating } />
        <AddMovieSelectGenre genre={ genre } />
        <AddMovieButton onClick={ this.onClick } />
      </AddMovieForm>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
