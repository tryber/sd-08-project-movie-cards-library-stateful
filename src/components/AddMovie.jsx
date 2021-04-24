import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import RenderAll from './RenderAll';

export default class AddMovie extends Component {
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
    this.handleGenre = this.handleGenre.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleGenre({ target }) {
    this.setState({
      genre: target.value,
    });
  }

  clearState() {
    const { onClick } = this.props;
    onClick();
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
        <RenderAll
          func={ this.handleChange }
          funcGenre={ this.handleGenre }
          title={ title }
          sub={ subtitle }
          image={ imagePath }
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
        />
        <Button onClick={ this.clearState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
