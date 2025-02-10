import ReactDOM from 'react-dom/client';

import { Application } from './Application';

const rootContainerElement = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(rootContainerElement);

rootContainer.render(<Application />);
