import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app';

const mainContainer = document.querySelector('#root');
// mainContainer.createRoot(mainContainer).render(

// )
createRoot(mainContainer).render(
    <App></App>
)