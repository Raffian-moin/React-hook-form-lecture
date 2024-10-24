import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import App from './App.tsx'
import ControlledComponent from './controlled-uncontrolled/ControlledComponent.tsx'
import './index.css'
import UncontrolledComponent from './controlled-uncontrolled/UncontrolledComponent.tsx'
import ValueDefaultValueComponent from './controlled-uncontrolled/ValueDefaualtValueComponent.tsx'
import ParentComponent from './render-props/ParentComponent.tsx'

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
    path: "/default-value-value-onchange",
    element: <ValueDefaultValueComponent />,
  },
  {
    path: "/render-props",
    element: <ParentComponent />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
)
