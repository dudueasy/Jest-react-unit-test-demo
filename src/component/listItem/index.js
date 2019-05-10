import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {

  render() {

    const {title, desc} = this.props;

    return (
      <Fragment>
        {title ?
          <div data-test="listItem">
            <h2 data-test="titleComponent">
              {title}
            </h2>

            <div data-test="descComponent">
              {desc}
            </div>
          </div>
          : null
        }
      </Fragment>

    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

