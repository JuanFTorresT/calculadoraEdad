import './InputCard.css'

export default function DayInput({funcionDelPadre}){
    const inputs = document.querySelectorAll('.input-time')
    const handleChange= (event) =>{
        const day = event.target.value;
        if (day>31) {
          inputs.forEach((input)=>{
            input.classList.remove('input-time');
            input.classList.add('input-time-invalid')
          })
        }else{
          inputs.forEach((input)=>{
            input.classList.remove('input-time-invalid');
            input.classList.add('input-time')
          })
          funcionDelPadre(day)
        }
        
    }

  return(
    <>
      <div className="input-container">
        <p className='label-time'>Day</p>
        <input className='input-time' type="number" name="" id="day" min={1} max={31} onChange={handleChange} />
      </div>
    </>
  );
}