import React, {Component} from 'react';
import Router from 'next/router'



export default class Login extends Component {
  static muiName = 'FlatButton';

  gotoLogin(){
    Router.push('/about')
  }

  render() {
    return (
      <div onClick={this.gotoLogin} />
    );
  }
}
