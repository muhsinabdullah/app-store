import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import RootLayout from "../root/RootLayout";


// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const AppsSection = lazy(() => import("../pages/AppsSection"));
const AppDetails = lazy(() => import("../pages/AppDetails"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/apps",
                element: <AppsSection />,
            },
            {
                path: "/apps/:id",
                element: <AppDetails />
            },
            {
                path: "*",
                element: <ErrorPage />,
            }
        ]
    },
]);

export default router;