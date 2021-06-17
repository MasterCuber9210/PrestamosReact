import React from 'react'; //imr

const Resultado = ({total, plazo, cantidad}) => ( //sfc
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {cantidad}</p>
        <p>A pagar en: {plazo} Meses</p>
        <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
        <p>Total a pagar : $ {(total).toFixed(2)}</p>
    </div>
); //sfc
 
export default Resultado;