import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/scss/bootstrap.scss';
import App from './routes/App';

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)