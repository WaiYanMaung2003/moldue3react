import { cilBold } from "@coreui/icons";
import { CInput } from "@coreui/react";
import React from "react";

const HomePrime=(props)=>{
let {name,age,saveClick,phoneChange,phone,nameChange,ageChange,gender,genderChange} = props;

    return(
        <>

       <h1>This is Home Prime</h1>
       <p>{<span style={{ color: 'blue' ,fontFamily:'fantasy',fontStyle:cilBold}}>{name}</span>} is {<span style={{ color: 'blue' ,fontFamily:'fantasy',fontStyle:cilBold}}>{age}</span>} years old</p>
       <p>phone number is {<span style={{ color: 'blue' }}>{phone}</span>}</p>
       
       <button className="btn btn-success mb-3"
       onClick={saveClick}>save</button>

        <CInput type="text" placeholder="Please fill name"
        onChange={nameChange} value={name}
       />
        <p>Your name is {name}</p>

        <select style={{width:80,height:30,}}
        value={age} onChange={ageChange}>
        <option value="age">age</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        
      </select>
      <p>Your age is {age}</p>

       <CInput type="number" placeholder="Please fill ph no."
        onChange={phoneChange} value={phone}
       />

       <p>Your phone is {phone}</p>

       <label style={{fontSize:20}}>Gender:</label>
      <br />
      <label>
        <input type="radio"  value="male" checked={gender === 'male'} onChange={genderChange} />
        Male
      </label>
      
      <label>
        <input type="radio" value="female" checked={gender === 'female'} onChange={genderChange} />
        Female
      </label>
      

      <label>
        <input type="radio" value="other" checked={gender === 'other'} onChange={genderChange} />
        other
      </label>
      <br />
      <p>Your gender is {gender}</p>
        
       </>

    )
}

export default HomePrime;