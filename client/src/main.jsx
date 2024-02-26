import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import SeeUser from './components/SeeUser.jsx';
const appRouter=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/user/:userId',
    element:<SeeUser/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/add-user',
    element:<AddUser/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/update-user/:userId',
    element:<UpdateUser/>,
    errorElement: <ErrorPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
  </RouterProvider>
)
