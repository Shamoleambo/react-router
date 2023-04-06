import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/Error'
import ProductDetails from './pages/ProductDetaisPage'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetails /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
