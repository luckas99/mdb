import React from 'react';
import axios from 'axios';

// Make our initial Context and providing our data with async call

export const Context = React.createContext();

export class Provider extends React.Component {

    state = {
        term: "",
        context: null,
        status: "initial",
        theme_color: "white",
        paragraph_color: "black"
    };

    fetch = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        this.setState({
            status: "done",
            context: response.data
        });
    };

    componentDidMount() {
        this.fetch()
    }

    render() {
        return (
            this.state.context !== null &&
            <Context.Provider value={{ ...this.state }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}