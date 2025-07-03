import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const root = createRoot(document.getElementById("root")!);

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
