import React from 'react'
import { useRoutes, HashRouter } from 'react-router-dom'
import './index.css'
import { AppProvider } from './context/AppContext'

import PageShell from './components/Layout/PageShell'
import ScrollToTop from './components/Layout/ScrollToTop'
import Home from './components/Home/Home'
import Resume from './pages/Resume/Resume'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/cv', element: <Resume /> }
  ])
  return routes
}

const App = () => {
  return (
    <HashRouter>
      <AppProvider>
        <ScrollToTop />
        <PageShell>
          <AppRoutes />
        </PageShell>
      </AppProvider>
    </HashRouter>
  )
}

export default App
