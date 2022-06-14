import ReactDOM from "react-dom";
import { App } from "./App";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import React from "react";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})


const app = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
  , app);

