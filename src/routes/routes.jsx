import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Home/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch("http://localhost:3000/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/categories/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
