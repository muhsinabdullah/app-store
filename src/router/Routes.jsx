import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AppsSection from "../pages/AppsSection";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
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