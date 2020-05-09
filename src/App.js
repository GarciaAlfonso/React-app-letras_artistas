import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import InfoArtista from './Components/InfoArtista';
import Spinner from './Components/Spinner';

import axios from 'axios';


function App() {

  //Definir el State
  const [busquedaLetra, setBusquedaLetra] = useState({});

  //State para la letra de la cancion
  const [letra, setLetra] = useState('');

  //State para la informacion de la banda

  const [infoArtista, setInfoArtista] = useState({});

  //State para el spinner

  const [cargando, setCargando] = useState(false);

  useEffect(() => {

    if(Object.keys(busquedaLetra).length === 0) return; //Comprueba si el objeto devuelto está vacio
    
    //consultar API de letras
    const consultarAPILetra = async () => {

      const {artista, cancion} = busquedaLetra;
      const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}&s=${artista}`;

      const [letra, info] = await Promise.all([
        axios(url1),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      
      info.data.artists[0] !== 0 && (
        setInfoArtista(info.data.artists[0]))
      
    }

    consultarAPILetra();

  }, [busquedaLetra, infoArtista]);

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
        setCargando={setCargando}
      />

      {cargando && <Spinner/>}

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtista
              infoArtista={infoArtista}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
              
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
