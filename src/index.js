import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'
import store from './store';
import App from './App';

// 样式
import 'normalize.css'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading...">
    <Provider store={store}>
      {/* 使用 styled-components 提供的 ThemeProvider 进行自定义主题 */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
