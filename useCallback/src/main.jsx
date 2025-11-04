import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './App'
import Parent from './Parent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <Parent/>
  </StrictMode>,
)
