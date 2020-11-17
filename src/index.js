import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationProvider } from "@mojang/t-component";


const fetchMessages = async (path: string) => {
  return (await fetch(path)).json();
};

fetchMessages("/translations/en_US.json").then(messages => {
  ReactDOM.render(
    <React.StrictMode>
          <TranslationProvider translation={messages}>
      <App />
      </TranslationProvider>,

    </React.StrictMode>,
    document.getElementById('root')
  );
});