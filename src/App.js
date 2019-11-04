import React, { Component, Suspense } from "react";
import { Provider } from "./Context";
import ExampleComponent from "./components/ExampleComponent";
import Loading from "./components/Loading";

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Provider>
          <ExampleComponent />
        </Provider>
      </Suspense>
    );
  }
}
