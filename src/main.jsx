import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-l533zzaw0trbepod.us.auth0.com"
    clientId="ac8BCkp5gOEtAZXCo0jNCMTGpMELcsAg"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/',
      audience: "https://dev-l533zzaw0trbepod.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
