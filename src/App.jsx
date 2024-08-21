import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorView,
  AboutView,
  HomeLayout,
  CocktailView,
  LandingView,
  NewsletterView,
  SingleError,
} from "./pages";

import { loader as initialLoader } from "./pages/LandingView";
import { loader as cocktailLoader } from "./pages/CocktailView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <LandingView />,
        loader: initialLoader,
        errorElement: <SingleError />,
      },
      {
        path: "landing",
        element: <LandingView />,
      },
      {
        path: "newsletter",
        element: <NewsletterView />,
      },
      {
        path: "cocktail/:id",
        element: <CocktailView />,
        errorElement: <SingleError />,
        loader: cocktailLoader,
      },
      {
        path: "about",
        element: <AboutView />,
      },
    ],
  },
]);
createBrowserRouter;
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
