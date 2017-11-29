import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import {initStore} from '../store'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import {cook} from '../plugins/cookieman'
import {setCurrentUser} from '../actions/auth'

class Counter extends React.Component {
  static getInitialProps({store, isServer, req}) {

    if (!isServer) {
      const headerCookie = isServer
        ? req.headers.cookie
        : '';
      let cookieInfo = cook(isServer, headerCookie);
      if (cookieInfo.valid) {
        store.dispatch(setCurrentUser({user: cookieInfo.user, sessionId: cookieInfo.sessionId}));
        Router.push('/')
      }
    }

    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return {isServer, auth: store.getState(), userAgent}
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {

    const layoutData = {
      currentPage: '/login'
    }
    return (
      <Layout data={layoutData} title="Login" auth={this.props.auth} userAgent={this.props.userAgent}>

        <div id="udacity" className="main-item">
          <p/>
          <LoginForm/>
        </div>
      </Layout>
    )
  }
}
export default withRedux(initStore)(Counter)
