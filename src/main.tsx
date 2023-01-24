import '@/styles/globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './root'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
