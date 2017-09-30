// @flow

import './style.css'
import * as React from 'react'
import logo from './logo.svg'

type Props = {
    name: string
};

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">login11</p>
        <img src={logo} alt="Logo" />
      </div>
    )
  }
}

export default Login
