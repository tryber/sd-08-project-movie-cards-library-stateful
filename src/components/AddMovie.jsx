import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    };
  }

  handleChange({ target }) {
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
          id="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
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
          id="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          id="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  textareaSinopse() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          id="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
        { this.inputSubtitle() }
        { this.inputImage() }
        { this.textareaSinopse() }
      </form>
    );
  }
}

export default AddMovie;
