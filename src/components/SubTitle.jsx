import React from 'react';

class SubTitle extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ this.onChangeHandler }
          id="subtitle"
          data-testid="subtitle-input"
          name="subtitle"
        />
      </label>
    );
  }
}

export default SubTitle;
