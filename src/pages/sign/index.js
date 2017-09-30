// @flow

import * as React from 'react';
import Flow from '../../components/flow'

class Sign extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          sign
        </p>
        <Flow foo={222}/>
      </div>
    );
  }
}

export default Sign;
