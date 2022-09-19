import { Route, Routes } from 'react-router-dom'
import LayoutAccounts from './pages/Layouts/LayoutsAccounts/LayoutsAccounts'
import NoMatch from './pages/NoMatch/NoMatch'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" />
        <Route path="accounts" element={<LayoutAccounts />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
