
import arrow from './assets/icon-arrow.svg'
import './Separator.css'

export default function Separator() {
    return(
        <>
            <div className="circle-separator">
                <hr />
                <img className='arrow' src={arrow} alt="" />
            </div>
            
        </>
    )
}