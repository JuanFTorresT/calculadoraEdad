import './InputCard.css'

export default function InputCard({time}){
  return(
    <>
      <div className="input-container">
        <p className='label-time'>{time}</p>
        <input className='input-time' type="number" name="" id="" />
      </div>
    </>
  );
}