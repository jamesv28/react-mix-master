import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorView,
  AboutView,
  HomeLayout,
  CocktailView,
  LandingView,
  NewsletterView,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <AboutView />,
  },
]);
createBrowserRouter;
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
