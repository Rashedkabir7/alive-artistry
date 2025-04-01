
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Create a proper container and root
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

// Render the App component wrapped in StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
