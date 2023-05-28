import type { AppProps } from 'next/app';
import { FunctionComponent, PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query'

export const queryClient = new QueryClient();

interface QueryClientProviderProps {
  client?: QueryClient;
}
export const QueryClientProvider: FunctionComponent<PropsWithChildren<QueryClientProviderProps>> = (props) => {
  return <ReactQueryClientProvider client={queryClient}>
    {props.children}
  </ReactQueryClientProvider>;
}
