import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Notes from './components/Notes'
import Navbar from './Navbar'
import ViewNotes from './components/ViewNotes'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/notes',
      element:
        <div>
          <Navbar />
          <Notes />
        </div>
    },
    {
      path: '/notes/:id',
      element:
        <div>
          <Navbar />
          <ViewNotes />
        </div>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
