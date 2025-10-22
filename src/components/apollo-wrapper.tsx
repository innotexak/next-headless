'use client';

import { ApolloLink, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import { useEffect, useState } from "react";

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_UMBRACO_GRAPHQL_URL}/graphql`,
    // Uncomment if Umbraco GraphQL requires authentication
    // headers: {
    //   authorization: `Bearer ${process.env.NEXT_PUBLIC_UMBRACO_API_KEY}`,
    // },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
      },
      watchQuery: {
        fetchPolicy: 'network-only',
      },
    },
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const [client, setClient] = useState<ApolloClient | null>(null);

  useEffect(() => {
    if (!client) {
      setClient(makeClient());
    }
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}