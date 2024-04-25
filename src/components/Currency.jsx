import image3 from '../image/SVG.png'
import image4 from '../image/SVG (1).png'
import image5 from '../imag(5).png'

const Currency = () => {
  return (
    <div style={{border: "1px solid black",display: "flex", flexDirection: "column",gap: "2rem"}}>
<div className="btn-group" aria-label="Basic example" style={{width: "100%", border: "1px solid black",}}>

  <button type="button" className="btn btn-primary" > 
  <img src={image3} alt="" />
  Convert
  </button>
    
  <button type="button" className="btn btn-primary">
    <img src={image4} alt="" />
  <button type="button" className="btn btn-primary">
    <img src={image5} alt="" />Send</button>
    Graphics</button>
  <button type="button" className="btn btn-primary">Alert</button>
</div>
   
        <form style={{border: "1px solid black"}}>
           
            <select className="form-select" aria-label="Default select example">
                <option selected>Amount</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
            
            <select className="form-select" aria-label="Default select example">
                <option selected>of</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
            
                <img src="../image/Swap currencies.png" alt="pic" />
            
            <select className="form-select" aria-label="Default select example">
                <option selected>toward</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
           
        </form>

    </div>
  )
}

export default Currency