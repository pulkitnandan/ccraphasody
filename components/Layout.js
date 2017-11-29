import React from 'react';
import Link from 'next/link'
import cx from 'classnames';
import NProgress from 'nprogress'
import Router from 'next/router'
import {connect} from 'react-redux';

import Login from './LoginButton'
import Logged from './LoggedHeaderLinks'
import {logout} from '../actions/auth';
import Header from './Header'

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends React.Component {

  gotoHome() {
    if (Router.pathname != '/') {
      Router.push('/')

      this.setState({value: '/'});
    }
  }

  gotoLogin() {
    if (Router.pathname != '/login') {
      Router.push('/login')

      this.setState({value: '/login'});
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.data.currentPage
    }
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
  }

  render() {
    const {userAgent} = this.props

    const standardActions = (<div onClick={this.handleRequestClose}/>)

    const {isAuthenticated} = this.props.auth;
    var navLinks = ''
    var newLinks = ''

    if (isAuthenticated) {

      navLinks = (<Logged/>);
      newLinks = (
        <div>
          <li onClick={this.gotoHome}>
            Home
          </li>
          {navLinks}
        </div>
      )
    } else {
      newLinks = (
        <div>

          <li onClick={this.gotoHome}>
            Home
          </li>
          <li onClick={this.gotoLogin}>
            Login
          </li>

        </div>
      )
    }
    return (
      <div>
        <div className="toolbar">
          <div className="name">{this.props.title}</div>
        </div>
        <div className="content">

          <Header onClick={this.logout}/>
          <div className="flex-container flex-vert">
            {/* <div className="main-item">
              <ul>
                {newLinks}
              </ul>
            </div> */}
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, {logout})(Layout);
