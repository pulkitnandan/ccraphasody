import Layout from '../components/Layout';
import Home from '../components/Home';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import {cook} from '../plugins/cookieman'
import {setCurrentUser} from '../actions/auth'
import {initStore} from '../store'
import apiServiceWrapper from '../services/index'

import {getAuthToken} from '../services/auth'

class MyPage extends React.Component {
  static async getInitialProps({store, isServer, req, query: { videoId } }) {
    var apiService = undefined
    let cookieInfo = cook(isServer, isServer
      ? req.headers.cookie
      : '');
    if (!store.getState().isAuthenticated) {
      if (cookieInfo.valid) {
        store.dispatch(setCurrentUser({user: cookieInfo.user, sessionId: cookieInfo.sessionId}));
        apiService = new apiServiceWrapper(cookieInfo.sessionId)

      } else {
        //    Router.push('/login')
      }
    } else
      apiService = new apiServiceWrapper(cookieInfo.sessionId)
    let product = {};
    if (apiService) {
      product = await(apiService.getProduct(videoId));
      product = product.data;

      var layoutData = {
        currentPage: '/'
      }

    } else {
      var layoutData = {
        currentPage: '/'
      }
    }
    
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }
    return {layoutData, isServer, auth: store.getState(), userAgent, product}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Layout auth={this.props.auth} title='Video' data={this.props.layoutData} userAgent={this.props.userAgent}>
          <Video auth={this.props.auth} data={this.props.product}/>
        </Layout>
      </div>
    )
  }
}

export default withRedux(initStore)(MyPage)
