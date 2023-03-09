import './App.css';
import VideoPlayer from './VideoPlayer';
import React, { useState } from 'react';


function App() {

  const [playing, setPlaying] = useState(false);

  function handleClick() {
    setPlaying(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="presentacion-CARD">
          <img src="./dev.jpg" className="App-logo" alt="dev" />
          <div className='presentacion'>
            <h1>Hola!</h1>
            <p>Soy Alejandro! Un desarrollador Front-End entusiasta y apasionado por la creación de sitios web atractivos y funcionales.</p>
            <p>Me encanta utilizar las últimas tecnologías y herramientas para crear experiencias únicas para los usuarios.</p>
            <p>En este portfolio, encontrarás algunos de mis proyectos más recientes y algunos de los trabajos que he realizado en el pasado. Desde sitios web sencillos hasta aplicaciones más complejas, estoy seguro de que encontrarás algo que te guste.</p>
          </div>
        </div>
        <button className='buttonProjects' onClick={handleClick}>Mis proyectos</button>
        <VideoPlayer playing={playing}/>
      </header>
    </div>
  );
}

export default App;
