import React from 'react';
import * as PropTypes from "prop-types"
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    let { children } = this.props
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}

Layout.propTypes = { children: PropTypes.any }

export default Layout;