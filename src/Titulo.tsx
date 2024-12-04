function Titulo () {
  // JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de React para describir la estructura de la interfaz de usuario de manera declarativa.
  const nombre = "chanchito feliz";

  if (nombre) {
    return <h1> Hola {nombre} </h1>;
  }

  return <h1> Hola mundo </h1>;
}

export default Titulo;
