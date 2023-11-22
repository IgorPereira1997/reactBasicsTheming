import React from 'react';

import { ThemeSwitcher } from './context/ThemeContext';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';


function App() {
  return (
    <ThemeSwitcher>
        <GlobalStyle />
        <Layout />
    </ThemeSwitcher>
  );
};

export default App;
