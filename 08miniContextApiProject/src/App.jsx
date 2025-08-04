
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import ClearBtn from './components/ClearBtn'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
      <br></br>
      <ClearBtn />
    </UserContextProvider>
  )
}

export default App