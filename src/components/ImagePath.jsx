import React from 'react';

class ImagePath extends React.Component {
  constructor() {
    super();

    this.state = {
      imagePath: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ this.onChangeHandler }
          id="imagePath"
          data-testid="image-input"
          name="imagePath"
        />
      </label>
    );
  }
}

export default ImagePath;
