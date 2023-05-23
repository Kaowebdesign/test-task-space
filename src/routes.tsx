import {createBrowserRouter} from "react-router-dom";
import { Layout, Home} from './modules/home'


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/courses",
                element: <>courses</>,
            },
            {
                path: "/libraries",
                element: <>libraries</>,
            },
            {
                path: "/statistics",
                element: <>statistics</>,
            },
            {
                path: "/guideline",
                element: <>guideline</>,
            },
        ]
    },
]);

export { router }
