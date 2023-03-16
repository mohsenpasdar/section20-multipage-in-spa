import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
