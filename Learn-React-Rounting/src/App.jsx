import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
import { children } from 'react'


const router = createBrowserRouter(
  [
    {path : "/", element :<div>
      <Navbar />
      <Home />

    </div>},
    {path : "About", element : <div>
      <Navbar />
      <About />
      </div>},
    {path : "Dashboard", element : <div>
      <Navbar />
      <Dashboard />
      </div>,
      children:[
        {
          path : 'courses', element : <Courses />
        },
        {
          path : 'moketest', element : <MockTest />
        },
        {path : 'reports', element : <Reports />}
      ]
    },

      {path : "/student/:id", element : <div>
        <Navbar />
        <ParamComp />
      </div>

      },

      {path : "*",element : <NotFound />}
  ]
)

function App() {


  return (
    <RouterProvider router = {router} />    // tell all the routers to the application using RouterProvider
  )
}

export default App
