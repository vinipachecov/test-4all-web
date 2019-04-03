import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import classes from './header.module.css';

const Header = ({ quantity, left, cartIcon }) => (
  <div className={classes.header}>
    {/* Left */}
    <div className={classes.headerLeft}>
      { <Link to="/" className={classes.link}>{left}</Link> || null}
    </div>
    {/* Center */}
    <div>Logo</div>
    {/* Right */}
    <div className={classes.headerRight}>
      { cartIcon ? <Link to="/checkout" className={classes.link}><CartIcon quantity={quantity} /></Link> : null}
    </div>
  </div>
);

Header.defaultProps = {
  quantity: 0,
  left: '',
  cartIcon: false,
};

Header.propTypes = {
  quantity: PropTypes.number,
  left: PropTypes.node,
  cartIcon: PropTypes.bool,
};

export default Header;
