import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          onChange={ this.handleEvent }
          value={ title }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          onChange={ this.handleEvent }
          value={ subtitle }
        />
      </label>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.imagePath()}
      </form>
    );
  }
}

export default AddMovie;
