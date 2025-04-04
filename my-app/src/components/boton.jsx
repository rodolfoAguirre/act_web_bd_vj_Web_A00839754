import React from 'react';

function Boton({ texto, onClick }) {
    return <button onClick={onClick}>{texto}</button>;
}

export default Boton;


// Otra forma de hacerlo es:
// const Boton = ({texto}) => {
//     return <button> {texto} </button>
// };


