"use client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { useMemo, type FunctionComponent, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BlogApolloProvider: FunctionComponent<Props> = ({ children }) => {
  const client = useMemo(() => {
    const uri = "/api/graphql";
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri,
        fetchOptions: { cache: "no-store" },
      }),
    });
  }, []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default BlogApolloProvider;
