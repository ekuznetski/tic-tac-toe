import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useRef } from "react";
import { TicTacToe } from "./components/TicTacToe";

function App() {
  const { current: queryClient } = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TicTacToe />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
