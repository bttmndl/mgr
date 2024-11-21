import { useState } from "react";
import "../style/Employee.css";

export default function Employee() {
  const [data, setData] = useState({
    contact:"",
    name: "",
    designation: "",
    dob: "",
    blood: "",
    image: null
  })

  function handleInput(name, val) {
    setData({...data, [name]: val})
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData({ ...data, image: reader.result }); // Update state with base64 string
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  }

  return (
    <div className="container">
      <div className="card-data">
        <div className="input">
          <input className="input_filed" type="text" placeholder="Name" name="name" onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className="input">
          <input className="input_filed" type="text" placeholder="Designation" name="designation" onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className="input">
          <input className="input_filed" type="text" placeholder="Date of Birth" name="dob" onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className="input">
          <input className="input_filed" type="text" placeholder="contact" name="contact" onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className="input">
          <input className="input_filed" type="text" placeholder="blood" name="blood" onChange={(e)=>handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className="input-img">
          <input type="file" accept="image/*" onChange={handleImageUpload}/>
        </div>
      </div>

      <div className="card-design">
        <div className="card">

          <div className="header">
            <h3>MGR OVERSEAS PVT LTD</h3>
          </div>

          <div className="line"></div>

          <div className="adress">
            <h4>E-206, New Focal Point, Amritsar-Pb</h4>
          </div>

          <div className="line2"></div>

          <div className="image-container">
            <div className="image">
                {data.image && <img src={data.image} alt="Employee"/>}
            </div>
          </div>

          <div className="name">
            <h4>{data.name.toUpperCase()}</h4>
          </div>

          <div className="desig">
            <h4>{data.designation.toUpperCase()}</h4>
          </div>

          <div className="details">
            <div><div><h4>Blood Group :-</h4></div> <div><h4>{data.blood.toUpperCase()}</h4></div></div>
            <div><div><h4>D.O.B :- </h4> </div> <div> <h4>{data.dob}</h4></div></div>
            <div><div><h4>Contact :- </h4> </div> <div><h4>{data.contact}</h4></div></div>
          </div>

          <div className="auth"><h4>Auth Signatory</h4></div>

        </div>
      </div>
    </div>
  );
}
