import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider, { useContextProvider } from './Components/utils/global.context';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
  const { state } = useContextProvider();

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);
  return <App />;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Main />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


