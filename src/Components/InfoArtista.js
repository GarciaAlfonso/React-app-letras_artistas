import React from 'react';
import PropTypes from 'prop-types';

const InfoArtista = ({infoArtista}) => {

       const {strArtistThumb, strGenre, strBiographyES } = infoArtista;

    return ( 
        Object.keys(infoArtista).length !== 0 && (

            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Información Artista
                </div>
                <div className="card-body">
                    <img src={strArtistThumb} alt="logo Artista"/>
                    <p className="card-text">Género: {strGenre}</p>
                    <h2 className="card-text">Biografía:</h2>
                    <p className="card-text">Género: {strBiographyES}</p>
                </div>
            </div>
        )
    );
}

InfoArtista.propTypes = {
    infoArtista : PropTypes.object.isRequired
}
 
export default InfoArtista;