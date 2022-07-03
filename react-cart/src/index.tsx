import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Creates react query
import {QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//Ensures I can use react query in the app
root.render(
  <QueryClientProvider client={client}>
    <App /> 
    </QueryClientProvider>
);
