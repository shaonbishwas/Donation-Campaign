import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage.jsx'
import Home from './Pages/Home/Home.jsx'
import Donation from './Pages/Donation/Donation.jsx'
import Statistics from './Pages/Statistics/Statistics.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <MainPage></MainPage>,
  children: [
    {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"/donation",
      element: <Donation></Donation>
    },
    {
      path:"/statistics",
      element: <Statistics></Statistics>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
