import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import {initStore} from '../store'
import Layout from '../components/Layout'
import {cook} from '../plugins/cookieman'
import {setCurrentUser} from '../actions/auth'
import apiServiceWrapper from '../services/index'

class Counter extends React.Component {
  static async getInitialProps({store, isServer, req}) {

    var apiService = undefined
    const headerCookie = isServer
      ? req.headers.cookie
      : '';
    let cookieInfo = cook(isServer, headerCookie);
    console.log(cookieInfo)
    if (cookieInfo.valid) {
      store.dispatch(setCurrentUser({user: cookieInfo.user, sessionId: cookieInfo.sessionId}));
      apiService = new apiServiceWrapper(cookieInfo.sessionId)
    }

    if (apiService) {

      var layoutData = {
        currentPage: 'about'
      }
    } else {
      var layoutData = {
        currentPage: 'about'
      }
    }

    return {layoutData, isServer, auth: store.getState()}
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {

    return ( <Layout data={this.props.layoutData} auth={this.props.auth}>This is aboui pubhouse </Layout>)
    }
}
export default withRedux(initStore)(Counter)
