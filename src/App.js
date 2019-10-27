import React, { Component } from 'react';
import { Provider } from './Context';
import ExampleComponent from './components/ExampleComponent';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <ExampleComponent />
      </Provider>
    )
  }
}
