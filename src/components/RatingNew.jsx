import React from 'react';

class RatingNew extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ this.onChangeHandler }
          id="rating"
          data-testid="rating-input"
          name="rating"
        />
      </label>
    );
  }
}

export default RatingNew;
