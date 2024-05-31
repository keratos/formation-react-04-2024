import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Modifier from './pages/Modifier'
export default function App() {
  const router = createBrowserRouter([
    {path :"/", element:<Home />},
    {path :"/modifier/:id", element:<Modifier />},
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}
