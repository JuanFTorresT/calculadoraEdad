import './InputCard.css'

export default function YearInput({recibeAño}){
  const handleChange = (event) =>{
    const year = event.target.value;
    recibeAño(year)
  } 
  return(
    <>
      <div className="input-container">
        <p className='label-time'>Year</p>
        <input className='input-time' type="number" name="" id="year" onChange={handleChange}/>
      </div>
    </>
  );
}
