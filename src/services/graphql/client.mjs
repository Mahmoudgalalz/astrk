import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import config from "../config.mjs";

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: config.apiServer,
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    httpLink,
    cache,
  });

  return client;
}

export default createApolloClient;
