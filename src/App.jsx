
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './layouts/MainLayOut'
import AuthLayOut from './layouts/AuthLayOut'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import PostDetailsPage from './pages/PostDetailsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import MainProtectedRoute from './components/protectedRoutes/MainProtectedRoute'
import AuthProtectedRoute from './components/protectedRoutes/AuthProtectedRoute'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <MainLayOut />, children: [
        { index: true, element: <MainProtectedRoute><FeedPage /></MainProtectedRoute> },
        { path: "profile", element: <MainProtectedRoute><ProfilePage /></MainProtectedRoute> },
        { path: "post-details/:id", element: <MainProtectedRoute> <PostDetailsPage /> </MainProtectedRoute> },


      ]
    },
    {
      path: "", element: <AuthLayOut />, children: [
        { path: "login", element: <AuthProtectedRoute><LoginPage /></AuthProtectedRoute> },
        { path: "register", element: <AuthProtectedRoute><RegisterPage /></AuthProtectedRoute> },
      ]
    },
    { path: "*", element: <NotFoundPage /> },
  ])


  return <>
    <RouterProvider router={router} />

  </>
}
