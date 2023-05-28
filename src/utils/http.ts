import axios from 'axios';
import { useState } from 'react';

export const http = axios.create({
  baseURL: 'http://localhost:5000',
});

type PromiseFuction<T> = (...args: any[]) => Promise<T>;
export function useApi<T extends any = any, Fetcher extends PromiseFuction<T> = PromiseFuction<T>>(fetcher: Fetcher) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<T | undefined>();
  const run = (...args: any[]) => {
    setIsLoading(true);
    setHasError(false);
    setData(undefined);
    return (fetcher as any)(...args).then((response: any) => {
      setData(response);
      return response;
    }).catch((err: any) => {
      setHasError(true);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  
  return {
    run: run as Fetcher,
    isLoading,
    hasError,
    data,
  };
};
