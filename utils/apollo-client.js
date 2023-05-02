import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({ uri: process.env.SHOPIFY_STORE_DOMAIN })

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  }
}))

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})