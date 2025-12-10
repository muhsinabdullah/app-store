import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AppsSection from "../pages/AppsSection";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/apps",
                element: <AppsSection />,
            }
        ]
    },
]);

export default router;