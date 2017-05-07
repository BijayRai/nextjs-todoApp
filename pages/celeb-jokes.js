import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, getJokes } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Link from 'next/link'
import Header from '../components/Header'
import {getToken} from '../utils/auth'
import securePage from '../hocs/securePage'
import defaultPage from '../hocs/defaultPage'

class CelebJokes extends React.Component {
  static async getInitialProps ({ store, isServer, req, res}) {
    const state = store.getState()
    const token = getToken(req);
    if(state.isAuthenticated){
      await store.dispatch(getJokes({token}))
    }
      
    return { isServer, token }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const {jokes} = this.props
    return (
        <div>
            <h1>Celeb Jokes Secret Route </h1>
            <ul>
                {jokes.map((joke, index) => (
                    <li key={joke.id}>{joke.joke}</li>
                ))}
            </ul>
            
        </div>
    )
  }
}

const mapStateToProps = ({jokes}) => ({jokes})
export default withRedux(initStore, mapStateToProps)(securePage(CelebJokes))