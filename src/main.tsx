import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UncontrolledComponent from './UncontrolledComponent.tsx'
import ControlledComponent from './ControlledComponent.tsx'
import Test from './Test.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/uncontrolled",
    element: <UncontrolledComponent />,
  },
  {
    path: "/controlled",
    element: <ControlledComponent />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
)
