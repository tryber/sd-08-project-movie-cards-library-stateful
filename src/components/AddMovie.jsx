import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputType from './form/InputType';
import Textarea from './form/Textarea';
import inputsAddMovie from './form/addMoviesInputsData';
import selectOptions from './form/selectOptions';
import Select from './form/Select';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.onChange = this.onChange.bind(this);
    this.textarea = this.textarea.bind(this);
    this.select = this.select.bind(this);
    this.inputType = this.inputType.bind(this);
    this.inputs = this.inputs.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  textarea({ name, lbTestId, iptTestId, label }) {
    const { [name]: value } = this.state;
    return (
      <Textarea
        key={ name }
        name={ name }
        onChange={ this.onChange }
        value={ value }
        labelTestId={ lbTestId }
        inputTestId={ iptTestId }
      >
        { label }
      </Textarea>
    );
  }

  select({ name, lbTestId, iptTestId, label }, data) {
    const { [name]: value } = this.state;
    return (
      <Select
        key={ name }
        data={ data }
        name={ name }
        onChange={ this.onChange }
        value={ value }
        labelTestId={ lbTestId }
        inputTestId={ iptTestId }
        optionTestId="genre-option"
      >
        { label }
      </Select>
    );
  }

  inputType({ type, name, lbTestId, iptTestId, label }) {
    const { [name]: value } = this.state;
    return (
      <InputType
        key={ name }
        type={ type }
        name={ name }
        onChange={ this.onChange }
        value={ value }
        labelTestId={ lbTestId }
        inputTestId={ iptTestId }
      >
        { label }
      </InputType>
    );
  }

  inputs(data) {
    const [, ...options] = selectOptions;
    return (
      <>
        { data.map((input) => {
          if (input.type === 'textarea') return this.textarea(input);
          if (input.type === 'select') return this.select(input, options);
          return this.inputType(input);
        }) }
      </>
    );
  }

  reset() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputs(inputsAddMovie) }
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.reset }
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
