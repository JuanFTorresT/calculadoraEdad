import './DateItem.css'

export default function DateItem({day}) {
    
    return <p className='item-text'><span className="item-number">{day} </span>Days</p>  

}