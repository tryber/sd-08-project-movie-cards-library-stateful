// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenderSelector extends Component {
  createSelectGender(blankOption, dataTestid3) {
    if (blankOption) {
      return (
        <>
          <option value="" data-testid={ dataTestid3 }>Todos</option>
          <option value="action" data-testid={ dataTestid3 }>Ação</option>
          <option value="comedy" data-testid={ dataTestid3 }>Comédia</option>
          <option value="thriller" data-testid={ dataTestid3 }>Suspense</option>
        </>);
    }
    return (
      <>
        <option value="action" data-testid={ dataTestid3 }>Ação</option>
        <option value="comedy" data-testid={ dataTestid3 }>Comédia</option>
        <option value="thriller" data-testid={ dataTestid3 }>Suspense</option>
      </>);
  }

  render() {
    const { text, dataTestid,
      dataTestid2, dataTestid3, initialState, callBack, blankOption, name } = this.props;
    return (
      <label htmlFor={ text } data-testid={ dataTestid }>
        { text }
        <select
          name={ name }
          data-testid={ dataTestid2 }
          value={ initialState }
          onChange={ callBack }
        >
          {this.createSelectGender(blankOption, dataTestid3)}
        </select>
      </label>
    );
  }
}

GenderSelector.propTypes = {
  text: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestid2: PropTypes.string.isRequired,
  dataTestid3: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  blankOption: PropTypes.bool,
  name: PropTypes.string,
};

GenderSelector.defaultProps = {
  blankOption: false,
  name: '',
};

export default GenderSelector;
