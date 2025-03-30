
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a proper container and root
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

// Render the App component
root.render(<App />);
