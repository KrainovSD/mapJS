import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode } from "react";
import { queryClient } from "@/shared/api";

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider(props: QueryProviderProps) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
