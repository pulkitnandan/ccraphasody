import Link from 'next/link'
import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store'
import {cook} from '../plugins/cookieman'
import Router from 'next/router'
import {setCurrentUser} from '../actions/auth'
import apiServiceWrapper from '../services/index'

class MyPage extends React.Component {
  static async getInitialProps({store, isServer, req}) {
    var apiService = undefined
    let cookieInfo = cook(isServer, isServer
      ? req.headers.cookie
      : '');
    if (!store.getState().isAuthenticated) {

      if (cookieInfo.valid) {
        store.dispatch(setCurrentUser({user: cookieInfo.user, sessionId: cookieInfo.sessionId}));
        apiService = new apiServiceWrapper(cookieInfo.sessionId)

      } else
        Router.push('/login')
    } else
      apiService = new apiServiceWrapper(cookieInfo.sessionId)

    if (apiService) {

      var layoutData = {
        currentPage: 'reports'
      }
    } else {
      var layoutData = {
        currentPage: 'reports'
      }
    }

    return {layoutData, isServer, auth: store.getState()}
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      let cookieInfo = cook(document.cookie);
      if (cookieInfo.valid) {
        this.props.dispatch(setCurrentUser({user: cookieInfo.user, sessionId: cookieInfo.sessionId}));
      } else
        Router.push('/login')
    }
  }

  render() {
    return (
        <Layout auth={this.props.auth} data={this.props.layoutData}>
      </Layout>
    )
  }
}

export default withRedux(initStore)(MyPage)
