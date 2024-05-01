import DayDisplay from './DayDisplay'
import YearDisplay from './YearDisplay'
import MonthDisplay from './MonthDisplay';

export default function ContentCard({date, months,year}) {
    return(
        <div className="content-container">
            
            <YearDisplay years= {year}/>
            <MonthDisplay months= {months}/>
            <DayDisplay days= {date}/>

        </div>
    );
}