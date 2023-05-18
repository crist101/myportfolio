import logo from './logo.svg';
import './App.css';
import './style.sass';
import React, { useState } from 'react';
import useThemeDetector from './components/checkTheme';

function App() {
  const isDarkTheme = useThemeDetector()
  return (
    <>
      <nav>
        <ul>
          <li>
            My Portfolio
          </li>
          <li>
            Projects
          </li>
          <li>
            Skills
          </li>
        </ul>
      </nav>
      <main>
      <p>The current Theme is {isDarkTheme?"dark":"light"}</p>
      </main>
    </>
  );
}

export default App;
