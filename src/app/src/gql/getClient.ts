import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import "server-only";

export const { getClient } = registerApolloClient(() => {
  const serverGraphqlUrl =
    process.env.GRAPHQL_SERVER_URL ??
    process.env.GRAPHQL_URL ??
    (process.env.APP_URL ? `${process.env.APP_URL}/api/graphql` : undefined) ??
    (process.env.PAYLOAD_PUBLIC_SERVER_URL
      ? `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`
      : "http://127.0.0.1:3000/api/graphql");
  const clientGraphqlUrl = process.env.GRAPHQL_URL ?? "/api/graphql";

  return new ApolloClient({
    cache: new InMemoryCache({}),
    //ssrMode: true, seems like this is redundadnt becaue is inteded to use in pages router

    link: new HttpLink({
      uri: typeof window === "undefined" ? serverGraphqlUrl : clientGraphqlUrl,
      fetchOptions: { cache: "force-cache" }, //, BE CAREFUL THIS COULD BE THE MEMORY LEAK SOURCE. UPDATE, IT DOESN'T SEEM TO BE
    }),
  });
});
