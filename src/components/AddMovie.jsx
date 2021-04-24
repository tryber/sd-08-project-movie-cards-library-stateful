// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleState = this.handleState.bind(this);
    this.sentForm = this.sentForm.bind(this);
  }

  handleState(event) {
    const { value, name } = event.target;
    if (name === 'image') {
      this.setState(() => ({ imagePath: value,
      }));
    } if (name === 'rating') {
      const convertValue = Number(value);
      this.setState(() => ({ [name]: convertValue,
      }));
    } else {
      this.setState(() => ({ [name]: value,
      }));
    }
  }

  sentForm(onClick) {
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    }));
  }

  insertInputText(refState, name, content, handleState) {
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { content }
        <input
          onChange={ handleState }
          value={ refState }
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }

  insertTextArea(refState, name, content, handleState) {
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { content }
        <textarea
          onChange={ handleState }
          value={ refState }
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
          type="textarea"
        />
      </label>
    );
  }

  insertInputNumber(refState, name, content, handleState) {
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { content }
        <input
          onChange={ handleState }
          value={ refState }
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
          type="number"
        />
      </label>
    );
  }

  insertFileInput(refState, name, content, handleState) {
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { content }
        <input
          onChange={ handleState }
          value={ refState }
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
          type="file"
        />
      </label>
    );
  }

  renderSelect(refState, name, content, handleState) {
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { content }
        <select
          onChange={ handleState }
          value={ refState }
          name={ name }
          data-testid={ `${name}-input` }
        >
          <option value="action" data-testid={ `${name}-option` }>Ação</option>
          <option value="comedy" data-testid={ `${name}-option` }>Comédia</option>
          <option value="thriller" data-testid={ `${name}-option` }>Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { insertInputText, insertTextArea, handleState, insertInputNumber,
      renderSelect, sentForm, insertFileInput } = this;
    const { onClick: click } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {insertInputText(title, 'title', 'Título:', handleState)}
        {insertInputText(subtitle, 'subtitle', 'Subtítulo', handleState)}
        {insertFileInput(imagePath, 'image', 'Imagem', handleState)}
        {insertTextArea(storyline, 'storyline', 'Sinopse', handleState)}
        {insertInputNumber((rating), 'rating', 'Avaliação', handleState)}
        {renderSelect(genre, 'genre', 'Gênero', handleState)}
        <button type="button" onClick={ () => sentForm(click) } data-testid="send-button">
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
