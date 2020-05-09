import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Formulario = ({setBusquedaLetra}) => {

    //state con los datos del formulario
    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });

    //state para validar los campos del formulario
    const [error, setError] = useState(false);

    //extrayendo los datos del state => objeto busqueda
    const {artista, cancion} = busqueda;

    //Función a cada input para leer su contenido

    const actualizarState = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    //Consultar las APIS con los valores del Formulario

    const buscarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true)
            return;
        }

        setBusquedaLetra(busqueda);
        setError(false);
    }

    return(
        <div className="bg-dark ">
            <div className="container">
                {error && <p className="alert alert-danger text-center p-2" >
                                Todos los Campos son Obligatorios
                            </p>} 
                <div className="row">                   
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center .bg-success">Buscador de Letras de Canciones</
                            legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary  float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setBusquedaLetra : PropTypes.func.isRequired
}

export default Formulario;