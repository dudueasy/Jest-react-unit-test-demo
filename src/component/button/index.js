import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class SharedButton extends React.Component {

  render() {
    const {buttonText, emitEvent} = this.props;

    return (
      <button
        data-test="buttonComponent"
        onClick={emitEvent}
      >
        {buttonText}
      </button>);
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};


