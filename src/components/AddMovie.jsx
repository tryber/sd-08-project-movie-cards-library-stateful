import React from 'react';
import PropTypes from 'prop-types';
import TextInputLabel from '../myComponents/TextInputLabel';
import TextAreaLabel from '../myComponents/TextAreaLabel';
import SelectInputLabelGenre from '../myComponents/SelectInputLabelGenre';
import Button from '../myComponents/Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.initialState = this.state;
  }

  handleClick(event) {
    const { onClick } = this.props;
    if (event.target.name === 'send-button') {
      event.preventDefault();
      onClick(this.state);
      this.setState(this.initialState);
    }
  }

  createTextInputLabelTitle(value, onChange) {
    return (
      <TextInputLabel
        labelText="Título"
        name="title"
        type="text"
        value={ value }
        onChange={ onChange }
        dataTestId="title-input"
        dataLabelTestId="title-input-label"
      />
    );
  }

  createTextInputLabelSubTitle(value, onChange) {
    return (
      <TextInputLabel
        labelText="Subtítulo"
        name="subtitle"
        type="text"
        value={ value }
        onChange={ onChange }
        dataTestId="subtitle-input"
        dataLabelTestId="subtitle-input-label"
      />
    );
  }

  createTextInputLabelImagePath(value, onChange) {
    return (
      <TextInputLabel
        labelText="Imagem"
        name="imagePath"
        type="text"
        value={ value }
        onChange={ onChange }
        dataTestId="image-input"
        dataLabelTestId="image-input-label"
      />
    );
  }

  createTextAreaLabel(value, onChange) {
    return (
      <TextAreaLabel
        labelText="Sinopse"
        name="storyLine"
        type="text"
        value={ value }
        onChange={ onChange }
        dataTestId="storyline-input"
        dataLabelTestId="storyline-input-label"
      />
    );
  }

  createTextInputLabelRating(value, onChange) {
    return (
      <TextInputLabel
        labelText="Avaliação"
        name="rating"
        type="number"
        value={ String(value) }
        onChange={ onChange }
        dataTestId="rating-input"
        dataLabelTestId="rating-input-label"
      />
    );
  }

  createSelectInputLabelGenre(value, onChange) {
    return (
      <SelectInputLabelGenre
        labelText="Gênero"
        name="genre"
        value={ value }
        onChange={ onChange }
        dtId="genre-input"
        dtLabelId="genre-input-label"
        dtOptionId="genre-option"
      />
    );
  }

  createButton(onClick) {
    return (
      <Button
        buttonText="Adicionar filme"
        name="send-button"
        onClick={ onClick }
        dataTestId="send-button"
      />
    );
  }

  updateState({ target }) {
    const { name, value } = target;
    const newValue = name === 'rating' ? Number(value) : value;

    this.setState({
      [name]: newValue,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTextInputLabelTitle(title, this.updateState) }
        { this.createTextInputLabelSubTitle(subtitle, this.updateState) }
        { this.createTextInputLabelImagePath(imagePath, this.updateState) }
        { this.createTextAreaLabel(storyLine, this.updateState) }
        { this.createTextInputLabelRating(rating, this.updateState) }
        { this.createSelectInputLabelGenre(genre, this.updateState) }
        { this.createButton(this.handleClick) }
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
