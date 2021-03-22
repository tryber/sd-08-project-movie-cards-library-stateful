import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputSubtitle extends React.Component {
  render() {
    const { onChangeForm, subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
          onChange={ onChangeForm }
          value={ subtitle }
        />
      </label>
    );
  }
}

AddMovieInputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func,
};

AddMovieInputSubtitle.defaultProps = {
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};
export default AddMovieInputSubtitle;
