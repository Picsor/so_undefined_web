import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<H ome />} />
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
