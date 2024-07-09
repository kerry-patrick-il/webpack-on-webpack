import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AppComponent from './AppComponent'
import { MyComponent } from 'the_library';

const App = () => (
  <div className="container">
    <div>Name: the_app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <br /><br />
    <AppComponent />
    <br /><br />
    <MyComponent />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
