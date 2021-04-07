// import React, { useState, useEffect, Fragment } from 'react';

// function ScrollHook() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     console.log("Fase de Montaje");

//     const detectarScroll = () => setScrollY(window.pageYOffset);

//     window.addEventListener("scroll", detectarScroll);
    
//   });
//   return ( 
//     <Fragment>
//       <h2>Hooks - useEffect y el Ciclo de Vida</h2>
//       <p>ScrollY del Navegador {scrollY}px</p>
//     </Fragment>
//    );
// }
 
// export default ScrollHook;