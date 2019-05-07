import React, {Component} from 'react';

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {header, desc} = this.props;

    return header ? (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    ) : null;
  }
}

export default Headline;