import React from 'react';

class TextArea extends React.Component {
  constructor() {
    super();

    this.state = {
      storyline: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="text"
          value={ storyline }
          onChange={ this.onChangeHandler }
          id="storyline"
          data-testid="storyline-input"
          name="storyline"
        />
      </label>
    );
  }
}

export default TextArea;
