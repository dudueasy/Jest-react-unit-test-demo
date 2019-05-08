import React, {Component} from 'react';
import * as PropTypes from 'prop-types';

class Headline extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {header, desc} = this.props;

    return (
      <div data-test="HeadlineComponent">

        {header ?
          <h1 data-test="header">{header}</h1>
          : null
        }

        {desc ?
          <p data-test="desc">{desc}</p> :
          null
        }
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool,
  })),
};


export default Headline;