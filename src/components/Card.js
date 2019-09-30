import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        // <!-- Aqui vienen las secciones de los personajes-->
        <section className="character">
            {/* <!-- Character Card Number 1--> */}
            <article className="characterCard">
                <div className="cardHeader">
                    <div className="cardImage">
                        <img src="https://rickandmortyapi.com/api/character/avatar/56.jpeg" />
                    </div>
                    <div className="characterCardTitle">
                        <h2 className="characterCardName">Esto es un prueba</h2>
                        <p className="characterCardDescription">Esto es un mensaje que se estrae de la API en el que se describe el personaje xD</p>
                    </div>
                </div>
                <div className="cardInfo">
                    <div className="characterCardTextWrapper">
                        <span>STATUS</span>
                        <p>Dead</p>
                    </div>
                    <div className="characterCardTextWrapper">
                        <span>SPECIES</span>
                        <p>Human</p>
                    </div>
                    <div className="characterCardTextWrapper">
                        <span>GENDER</span>
                        <p>Male</p>
                    </div>
                    <div className="characterCardTextWrapper">
                        <span>ORIGIN</span>
                        <p>Unknow</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Card;