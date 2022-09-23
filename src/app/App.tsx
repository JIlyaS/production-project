import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import AboutPage from 'pages/AboutPage/AboutPage';
// import MainPage from 'pages/MainPage/ui/MainPage';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import './styles/index.scss';
// import { Theme, ThemeContext } from 'app/providers/ThemeProvider';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
