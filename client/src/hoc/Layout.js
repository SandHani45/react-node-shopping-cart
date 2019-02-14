import React, { Component } from 'react'

// components
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
 class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="page_container">
              {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}
export default Layout;