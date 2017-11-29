import React, {Component} from 'react';
import Router from 'next/router'

import {connect} from 'react-redux';

import {logout} from '../actions/auth';


class Logged extends React.Component {



  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.logout = this.logout.bind(this);


  }
  render() {
    return (
  <div>

    <li >More</li>
    <li >Refresh</li>
    <li onClick={this.logout} >Log Out</li>
  </div>
)
}
};


function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, {logout})(Logged);
