import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { Children } from 'react-dom/client'
import About from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Content from './components/Content/Content.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Layout/>,
    
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element: <About/>
      },
      {
      path:"content",
      element:<Content/>
      },
      {
        path:"github",
        element:<Github/>

      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
