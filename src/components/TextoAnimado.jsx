import React, { useState, useEffect } from 'react';

function TextoAnimado({text}) {
  const [texto, setTexto] = useState(text);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    let intervalo;
    if (indice < texto.length) {
      intervalo = setInterval(() => {
        setIndice((indice) => indice + 1);
      }, 100);
    } else {
      intervalo = setTimeout(() => {
        setIndice(0);
        setTexto(text);
      }, 2000);
    }
    return () => clearInterval(intervalo);
  }, [texto, indice]);

  return (
    <div className='textoAnimado'>
      {texto.slice(0, indice)}
    </div>
  );
}

export default TextoAnimado;