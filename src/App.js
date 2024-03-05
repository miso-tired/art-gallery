import React, { useState, useEffect } from 'react';
import Gallery from './Gallery'
import ButtonsBar from './ButtonsBar';
import './App.css'

function App() {
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };
  
  useEffect(() => {
    document.title = 'Welcome to Artworld';
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  return (
    <div>
      <Gallery
        objectImg={data.primaryImage}
        title={data.title}
        artist={data.artistDisplayName}
      />
      <ButtonsBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;