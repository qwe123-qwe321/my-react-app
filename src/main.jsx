import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyleProvider hashPriority="high">
        <ConfigProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  </React.StrictMode>
);