import React from 'react';
import './App.css';
import DarkLeft from './components/DarkLeft';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <DarkLeft />
      <TopBar />

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
