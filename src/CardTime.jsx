import HeaderCard from './HeaderCard'
import Separator from './Separator';
import ContentCard from './ContentCard';

import { useState } from 'react';

import './CardTime.css'

const date = new Date;



export default function CardTime() {

    const [diafinal,setDiafinal] = useState(0);
    const [mesfinal,setmesfinal] = useState(0);
    const [añoFinal,setAñoFinal] = useState(0);

    function sacarDia(day) {

        const diaActual = date.getDate();
        const fechaCalculada = diaActual-day;
        setDiafinal(fechaCalculada);

    }




    function calculaMes(month){
        const mesActual = date.getMonth()+1
        const mesCalculado = 12-(month-mesActual)
        setmesfinal(mesCalculado);
       
    }



    function calculaAño(year) {
        const añoActual = date.getFullYear();
        const añoCalculado = (añoActual-year)-1
        setAñoFinal(añoCalculado)
    }

    return(
        <div className="card">
            <HeaderCard envíoDay={sacarDia} enviaMes={calculaMes} enviaAño={calculaAño}/>
            <Separator/>
            <ContentCard date = {diafinal} months={mesfinal} year={añoFinal}/>
        </div>
        
    );
}