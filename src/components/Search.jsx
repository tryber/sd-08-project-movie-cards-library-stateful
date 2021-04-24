import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { sT, onSearch } = this.props;
    return (
      <section>
        <label htmlFor="searchtext" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchtext"
            type="text"
            value={ sT }
            onChange={ onSearch }
            data-testid="text-input"
          />
        </label>
        <input id="searchtext" type="submit" value="Enviar" />
      </section>
    );
  }
}

Search.propTypes = {
  sT: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
