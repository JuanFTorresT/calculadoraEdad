import './InputCard.css'

export default function MonthInput({recibeMes}){
  function handleChange(event) {
    const month = event.target.value;
    recibeMes(month);
    
  }
  return(
    <>
      <div className="input-container">
        <p className='label-time'>Month</p>
        <input className='input-time' type="number" name="" id="" min={1} max={12} onChange={handleChange}/>
      </div>
    </>
  );
}
