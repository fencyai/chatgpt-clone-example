import { loadFency } from '@fencyai/js'
import { FencyProvider } from '@fencyai/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const fency = loadFency({
    publishableKey:
        'pk_69214e18e31543a8ad8b88d3549d4d22VphsHy3WriXhhw4dvEJJOypwNSyyC8UB',
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FencyProvider fency={fency}>
            <App />
        </FencyProvider>
    </StrictMode>
)
