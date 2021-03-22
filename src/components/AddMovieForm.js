import React from 'react';
import PropTypes from 'prop-types';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    const { children, onChangeForm } = this.props;
    return React.Children.map(children, (child) => React.cloneElement(child, {
      onChangeForm,
    }));
  }

  render() {
    return <form data-testid="add-movie-form">{this.renderChildren()}</form>;
  }
}

AddMovieForm.propTypes = {
  children: PropTypes.node.isRequired,
  onChangeForm: PropTypes.func,
};

AddMovieForm.defaultProps = {
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};

export default AddMovieForm;
