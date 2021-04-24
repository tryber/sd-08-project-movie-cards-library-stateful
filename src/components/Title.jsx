import React from 'react';

class Title extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ title }
          onChange={ this.onChangeHandler }
          id="title"
          data-testid="title-input"
          name="title"
        />
      </label>
    );
  }
}

export default Title;
