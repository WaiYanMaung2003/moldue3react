import React, { useState } from "react";
import HomePrime from "./homePrime";
const Home=()=>{

    const [name,setname]=useState("")
    const [phone,setPhone]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    



    const saveClick = () =>{
        alert("save Clicked")
    }

    const phoneChange = (e) =>{
        setPhone (e.target.value);
    }

    const nameChange = (e) =>{
        setname (e.target.value);
    }

    const ageChange = (e)=>{
        setAge (e.target.value);
    }
    const genderChange =(e)=>{
        setGender(e.target.value);
    }
    return(
        <>
        <h1>This is Home</h1>
        <HomePrime 
        
        
            saveClick={saveClick}
            phone={phone}
            phoneChange={phoneChange}
            name={name} 
            nameChange={nameChange}
            age= {age}
            ageChange ={ageChange}
            gender={gender}
            genderChange={genderChange}
        />
        </>
       
    )
}

export default Home;