import React from 'react';
import PropTypes from 'prop-types';

import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStoryline from './AddStoryline';
import AddRating from './AddRating';
import AddGenre from './AddGenre';

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
    this.resetStates = this.resetStates.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'rating') {
      value = parseFloat(value);
    }

    this.setState({
      [name]: value,
    });
  }

  resetStates() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  submitChange(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.resetStates();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } handleChange={ this.handleChange } />
        <AddSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddImage value={ imagePath } handleChange={ this.handleChange } />
        <AddStoryline value={ storyline } handleChange={ this.handleChange } />
        <AddRating value={ rating } handleChange={ this.handleChange } />
        <AddGenre value={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.submitChange }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
