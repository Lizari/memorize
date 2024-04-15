import Header from "@/components/common/Header";
import NotFoundPage from "@/pages/404";
import AuthPage from "@/pages/Auth";
import Top from "@/pages/Top";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      enabled: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Top />
      </>
    ),
  },
  {
    path: "/auth",
    element: (
      <>
        <AuthPage />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <NotFoundPage />
      </>
    ),
  },
]);

function AppProvider() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default AppProvider;
