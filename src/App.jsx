import React, { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ToggleTheme from './components/ToggleTheme';
//Pages
import Home from './pages/Home';
import CharacterInfo from './pages/CharacterInfo';
import CreateCharacter from './pages/CreateCharacter';

function App() {
  const [theme, setTheme] = useState('dark');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const chooseTheme = (chosenTheme) => {
    setTheme(chosenTheme);
    localStorage.setItem('userTheme', theme);
  };

  const filterHeader = (status, gender) => {
    setStatusFilter(status);
    setGenderFilter(gender);
  };

  return (
    <ThemeProvider
      theme={
        localStorage.getItem('userTheme') === 'dark' ? darkTheme : lightTheme
      }
    >
      <div className="App">
        <GlobalStyle />
        <Header filterHeader={filterHeader} />
        <ToggleTheme chooseTheme={chooseTheme} />
        <Banner />
        <Route path="/" exact>
          <Home status={statusFilter} gender={genderFilter} />
        </Route>
        <Route path="/character/:id" component={CharacterInfo} />
        <Route path="/create_character" component={CreateCharacter} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
