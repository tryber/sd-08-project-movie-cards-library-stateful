import React from 'react';
import PropTypes from 'prop-types';
import ButtonSub from './ButtonSub';
import TitleInput from './TitleInput';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import RatingInput from './RatingInput';
import StoryLine from './StoryLine';
import GenreInput from './GenreInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.buttonSub = this.buttonSub.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonSub() {
    const { onClick: newM } = this.props;
    this.setState((state) => {
      newM(state);
      return {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: '',
      };
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubTitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <GenreInput genre={ genre } handleChange={ this.handleChange } />
        <ButtonSub buttonSub={ this.buttonSub } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
