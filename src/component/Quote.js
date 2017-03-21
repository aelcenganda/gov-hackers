import React, { PropTypes } from 'react';
import quote from '../assets/quote_mark.png';

const styles = {
  viewport: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundSize: '22px 24px',
    backgroundImage: `url(${quote})`,
    backgroundRepeat: 'no-repeat',
    textAlign: 'justify',
    color: '#444444',
    fontSize: 18,
    lineHeight: 1.2,
  },
};

function Component({ children, style }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      {children}
    </div>
  );
}

Component.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.string.isRequired,
};

Component.defaultProps = {
  style: {},
};

export default Component;