import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AuthLayOut from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from './../pages/NotFoundPage';
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
import AddTutorial from "../pages/AddTutorial";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "find-tutors",
        Component: FindTutors,
      },
      {
        path: "tutor/:id",
        Component: TutorDetails,
      },
      // },
      {
        path: "add-tutorial",
        Component: AddTutorial,
        //loader: async () => { return await fetch('https://greenworld-server.onrender.com/tips').then(res => res.json()) }
      },
      // {
      //   path: "share-tip",
      //   Component: ShareTip,

      // },
      // {
      //   path: "tips/:id",
      //   element: <ProtectedRoute><TipsDetailsPage /></ProtectedRoute>,
      //   loader: async ({ params }) => {
      //     const res = await fetch(`https://greenworld-server.onrender.com/share-tip/${params.id}`)
      //     return res.json();
      //   }

      // },
      // {
      //   path: "my-tips",
      //   element: <ProtectedRoute><MyTips /></ProtectedRoute>,
      //   loader: async () => { return await fetch('https://greenworld-server.onrender.com/tips').then(res => res.json()) }



      // },
      {
        path: '/auth',
        Component: AuthLayOut,
        children: [
          {
            path: '/auth/login',
            Component: Login,
          },
          {
            path: '/auth/register',
            Component: Register,
          },
        ]
      },
      {
        path: "*",
        element: <NotFoundPage />,



      },
    ]

  },

])
export default Router;
