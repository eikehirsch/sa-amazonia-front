import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { GlobalContextProvider } from './contexts/GlobalContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>

    </RouterProvider>
    <ToastContainer/>

  </GlobalContextProvider>
)
