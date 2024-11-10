import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const rootContainerElement = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(rootContainerElement);

rootContainer.render(<App />);
