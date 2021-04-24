import React from 'react';
import PropTypes from 'prop-types';

import AddMovieTextInputTitle from './AddMovieTextInputTitle';
import AddMovieTextInputSubtitle from './AddMovieTextInputSubtitle';
import AddMovieTextInputImage from './AddMovieTextInputImage';
import AddMovieTextArea from './AddMovieTextArea';
import AddMovieInputRating from './AddMovieInputRating';
import AddMovieSelect from './AddMovieSelect';
import AddMovieSendButton from './AddMovieSendButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSendButton = this.handleSendButton.bind(this);
  }

  handleSendButton(event) {
    const { onClick } = this.props;
    event.preventDefault();
    const { state } = this;
    onClick(state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;

    if (name === 'rating') {
      return this.setState({ [name]: Number(value) });
    }

    return this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleSendButton, handleChange } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <AddMovieTextInputTitle title={ title } handleChange={ handleChange } />
        <AddMovieTextInputSubtitle subtitle={ subtitle } handleChange={ handleChange } />
        <AddMovieTextInputImage imagePath={ imagePath } handleChange={ handleChange } />
        <AddMovieTextArea storyline={ storyline } handleChange={ handleChange } />
        <AddMovieInputRating rating={ rating } handleChange={ handleChange } />
        <AddMovieSelect genre={ genre } handleChange={ handleChange } />
        <AddMovieSendButton handleSendButton={ handleSendButton } />
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
