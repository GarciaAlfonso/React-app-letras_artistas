import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Cancion = ({letra}) => {
    
    
    return (
        
        letra !== '' && ( //comprueba si letra está vacia, si es asi no muestra el componente
            <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
        )
             
    );
}

Cancion.propTypes = {
    letra : PropTypes.string.isRequired
}
 
export default Cancion;
