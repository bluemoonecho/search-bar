import React from 'react'
// import './App.css';
import SearchBar from './components/SearchBar';
import BookData from './Data.json'

function App() {
  return (
    <div className="App">
        <SearchBar placeholder={'Enter text'} data={BookData} />
    </div>
  );
} 

export default App;
