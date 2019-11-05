import React from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import i18next from "i18next";

// Make our initial Context and providing our data with async call

export const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    term: "",
    context: null,
    status: "initial",
    theme: {
      color: "white",
      paragraph_color: "black"
    }
  };

  fetch = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    this.setState(
      {
        status: "done",
        context: response.data
      },
      () => {
        i18next.changeLanguage("en");
      }
    );
  };

  componentDidMount() {
    this.fetch();
  }

  render() {
    if (!this.state.context) {
      return null;
    }

    return (
      <Context.Provider value={{ ...this.state }}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
