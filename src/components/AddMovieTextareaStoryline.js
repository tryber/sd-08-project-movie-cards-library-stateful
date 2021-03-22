import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextareaStoryline extends React.Component {
  render() {
    const { onChangeForm, storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ onChangeForm }
          value={ storyline }
        />
      </label>
    );
  }
}

AddMovieTextareaStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func,
};

AddMovieTextareaStoryline.defaultProps = {
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};
export default AddMovieTextareaStoryline;
