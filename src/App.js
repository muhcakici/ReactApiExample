import './App.css';
import { useState } from 'react';
import AxiosExample from './Context/AxiosExample';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from './Components/MainPage';
import LocalPage from './Components/LocalPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path={"/"} />
          <Route element={<LocalPage />} path={"/local"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
