import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Globals.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { FarewellTextProvider } from './context/FarewellContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <FarewellTextProvider>
          <App />
        </FarewellTextProvider>
      </LanguageProvider>
    </Provider>
  </StrictMode>,
)
