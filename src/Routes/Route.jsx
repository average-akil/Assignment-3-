import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";
import Apps from "../Pages/Apps/Apps.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import TrendingApps from "../Pages/Apps/TrendingApps.jsx";
import Review from "../Components/Review/Review.jsx";
import AppDetails from "../Pages/AppDetails/AppDetails.jsx";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("appData.json"),
        path: "/",
        Component: Home,
        errorElement: <ErrorPage />,
      },
      {
        path: "/apps",
        loader: () => fetch("appData.json"),
        Component: Apps,
        errorElement: <ErrorPage />,
      },
      {
        path: "appDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("appData.json");
          const apps = await res.json();
          return apps.find((app) => app.id === Number(params.id));
        },
        Component: AppDetails,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
