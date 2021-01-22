import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import SelectGenre from './SelectGenre';
import StoryLine from './StoryLine';

const optionList = [
  {
    name: 'Ação',
    value: 'action',
  },
  {
    name: 'Comédia',
    value: 'comedy',
  },
  {
    name: 'Suspense',
    value: 'thriller',
  },
];

const DEF_SELECT_GENRE_PROPS = {
  labelName: 'Gênero',
  testid1: 'genre-input-label',
  testid2: 'genre-input',
  testid3: 'genre-option',
};

class AddMovie extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit() {
    const { onClick } = this.props;
    if (onClick) {
      const data = this.state;
      this.resetState();
      onClick(data);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

  InputTitle() {
    const { title } = this.state;
    return (
      <>
        <Input
          name="title"
          labelName="Título"
          onChange={ this.handleChange }
          value={ title }
        />
        <br />
      </>
    );
  }

  InputSubtitle() {
    const { subtitle } = this.state;
    return (
      <>
        <Input
          type="text"
          name="subtitle"
          labelName="Subtítulo"
          onChange={ this.handleChange }
          value={ subtitle }
        />
        <br />
      </>
    );
  }

  InputRating() {
    const { rating } = this.state;
    return (
      <>
        <Input
          type="number"
          name="rating"
          labelName="Avaliação"
          onChange={ this.handleChange }
          value={ rating }
        />
        <br />
      </>
    );
  }

  InputImagePath() {
    const { imagePath } = this.state;
    return (
      <>
        <Input
          type="text"
          name="imagePath"
          labelName="Imagem"
          onChange={ this.handleChange }
          value={ imagePath }
        />
        <br />
      </>
    );
  }

  InputStoryLine() {
    const { storyline } = this.state;
    return (
      <>
        <StoryLine onChange={ this.handleChange } value={ storyline } />
        <br />
      </>
    );
  }

  InputGenre() {
    const { genre } = this.state;
    return (
      <>
        <SelectGenre
          { ...DEF_SELECT_GENRE_PROPS }
          optionList={ optionList }
          onChange={ this.handleChange }
          value={ genre }
        />
        <br />
      </>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.InputTitle()}
        {this.InputSubtitle()}
        {this.InputStoryLine()}
        {this.InputImagePath()}
        {this.InputRating()}
        {this.InputGenre()}
        <button type="button" data-testid="send-button" onClick={ this.handleSubmit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: null,
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
