import React from 'react'
import ReactDOM from 'react-dom'
import { Page } from './app/page/page'
import { AppProvider } from './app/context/app.context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Page />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
