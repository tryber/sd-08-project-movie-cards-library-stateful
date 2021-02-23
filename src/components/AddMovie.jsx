// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import MovieRating from './MovieRating';
import Genre from './Genre';

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
    this.Button = this.Button.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  Button(onClick) {
    return (
      <button
        onClick={ () => {
          onClick(this.state);
          this.setState({
            title: '',
            subtitle: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
          });
        } }
        type="button"
        data-testid="send-button"
      >
        Adicionar filme
      </button>);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" id="form">
        <Title handleChange={ this.handleChange } titleValue={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <Image handleChange={ this.handleChange } imageValue={ imagePath } />
        <Storyline handleChange={ this.handleChange } story={ storyline } />
        <MovieRating handleChange={ this.handleChange } rate={ rating } />
        <Genre handleChange={ this.handleChange } genre={ genre } />
        { this.Button(onClick) }
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
