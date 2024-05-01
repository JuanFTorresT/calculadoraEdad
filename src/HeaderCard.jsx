import DayInput from './DayInput'
import MonthInput from './MonthInput';
import YearInput from './YearInput';

import './HeaderCard.css'

export default function HeaderCard({envíoDay,enviaMes,enviaAño}){
    
    function handlerFuncionDelPadre(day){
        envíoDay(day)
    }
    
    function manejaMesRecibido(month){
        enviaMes(month)
    }

    function manejaAñoRecibido(year) {
        enviaAño(year)
    }



    return(
        <>
        <div className="header-card">
            <DayInput funcionDelPadre={handlerFuncionDelPadre}/>
            <MonthInput recibeMes={manejaMesRecibido}/>
            <YearInput recibeAño={manejaAñoRecibido}/>
        </div>
        </>
    );
}