import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Import layouts
import RootLayout from "./layouts/RootLayout";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

// Create router with JSX Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Index route (default child route) */}
      <Route index element={<Home />} />

      {/* Other routes */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* Nested routes */}
      <Route path="products">
        {/* Index route for products path */}
        <Route index element={<Products />} />
        {/* Dynamic route with URL parameter */}
        <Route path=":id" element={<ProductDetail />} />
      </Route>

      {/* 404 Not Found route - catches all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
