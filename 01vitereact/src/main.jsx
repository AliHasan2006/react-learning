import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

/*
we can write run any function in the render method like this..
function MyApp() {
  return(
    <h1>Hello</h1>
  )
}
createRoot(document.getElementById('root')).render(
 MyApp()
)

*/
