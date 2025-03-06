import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import RecipePage from "./pages/RecipePage"

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "recipe/:id",
        element : <RecipePage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App