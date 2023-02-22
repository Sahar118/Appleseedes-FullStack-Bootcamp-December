import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route 
} from 'react-router-dom'

import HomePage from './pages/Home'
import AboutPage from "./pages/About"
import RootLayout from './pages/Root'
import './App.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> }
    ]
  }
])



// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/about' element={<AboutPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinition)

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
