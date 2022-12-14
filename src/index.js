import './styles.css'

import { createRoot } from 'react-dom/client';
import React from 'react'

import App from './App'

const container = document.createElement('div')
container.className = 'container'

const app = document.querySelector('body')
app.append(container)

const domContainer = document.querySelector('.container');
const root = createRoot(domContainer);
root.render(<App />);