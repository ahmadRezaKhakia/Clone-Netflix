import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18n/config.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
                <App />
        </Suspense>
    </BrowserRouter>
    
);
