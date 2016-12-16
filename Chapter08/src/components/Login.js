import React, { PropTypes } from 'react';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  title: {
    textAlign: 'center',
    color: '#008000'
  },
  main: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '15px 5px',
    borderRadius: '3px'
  },
  wrapper: {
    display: 'flex',
    minHeight: '60vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btncustom: {
    color: '#fff',
    background: '#337ab7',
    cursor: 'pointer',
    border: '1px solid #2e6da4',
    padding: '15px 25px',
    fontSize: '20px',
    lineHeight: '20px'
  },
  '@media (max-width: 600px)': {
    title: {
      fontSize: '1em'
    },
    main: {
      fontSize: '0.9em'
    }
  }
}).attach();

const Login = ({ fBLogin }) => (
  <div className={classes.wrapper}>
    <div>
      <div className={classes.main}>
        <button className={classes.btncustom} onClick={fBLogin}>Connect to Facebook</button>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  fBLogin: PropTypes.func.isRequired
};

export default Login;
