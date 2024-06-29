import { CRow,CCol, CLabel, CInput, CSelect ,CButton} from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewMenu=()=>{

    let history=useHistory();

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [bth,setBth]=useState("");
    const [eSkill,setESkill]=useState("");    
    const [jSkill,setJSkill]=useState("");    
    
   

const [japanSkill,setJapanSkill]=useState([
    {id:1,level:"N1"},
    {id:2,level:"N2"},
    {id:3,level:"N3"},
    {id:4,level:"N4"},
    {id:5,level:"N5"},
]);

const [englishSkill,setEnglishSkill]=useState([
    {id:1,level:"Beginner"},
    {id:2,level:"Intermediate"},
    {id:3,level:"Advanced"},
]);

const nameChange=(e)=>{
    setName(e.target.value);
}
const phoneChange=(e)=>{
    setPhone(e.target.value);
}
const emailChange=(e)=>{
    setEmail(e.target.value);
    }

const bthChange=(e)=>{
    setBth(e.target.value);
}


const sendForm=()=>{
    localStorage.setItem("NAME",name);
    localStorage.setItem("PHONE",phone);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("BTH",bth);
    localStorage.setItem("ESKILL",eSkill);
    localStorage.setItem("JSKILL",jSkill);
    history.push('/menus/TestCode');
    
}


const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setBth("");
    setJSkill(""); // Add this line
    setESkill(""); // Add this line
  }

const engChange = (e) =>{
    setESkill(e.target.value);
}

const JChnage = (e) =>{
    setJSkill(e.target.value);
}


    
    

    console.log("name",name)
    console.log("phone",phone)
    console.log("email",email)
    console.log("bth",bth)
    console.log("jSkill",jSkill)
    console.log("eSkill",eSkill)
        


    return (
      <div className="container py-5">
        <h1 className="text-center mb-4">Register Form</h1>
        <CRow className="justify-content-center">
          <CCol lg="8" className="bg-dark py-4 px-5 shadow">
            <CRow>
              <CCol lg="6">
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">Name:</CLabel>
                    <CInput
                      type="text"
                      value={name}
                      onChange={nameChange}
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </CCol>
                </CRow>
                <br />
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">Phone:</CLabel>
                    <CInput
                      type="text"
                      value={phone}
                      onChange={phoneChange}
                      placeholder="Enter your phone number"
                      className="form-control"
                    />
                  </CCol>
                </CRow>
                <br />
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">Japanese skill:</CLabel>
                    <CSelect
                      onChange={JChnage}
                      value={jSkill}
                      className="form-control"
                    >
                      <option>-- Select --</option>
                      {japanSkill.map((data, index) => (
                        <option key={data.id} value={data.level}>
                          {data.level}
                        </option>
                      ))}
                    </CSelect>
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg="6">
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">Email:</CLabel>
                    <CInput
                      type="email"
                      value={email}
                      onChange={emailChange}
                      placeholder="Enter your email"
                      className="form-control"
                    />
                  </CCol>
                </CRow>
                <br />
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">Birthday:</CLabel>
                    <CInput
                      type="date"
                      value={bth}
                      onChange={bthChange}
                      placeholder="Enter your birthday"
                      className="form-control"
                    />
                  </CCol>
                </CRow>
                <br />
                <CRow>
                  <CCol lg="12">
                    <CLabel className="mt-2">English skill:</CLabel>
                    <CSelect
                      onChange={engChange}
                      value={eSkill}
                      className="form-control"
                    >
                      <option value="">-- Select --</option>
                      {englishSkill.map((data, index) => (
                        <option key={data.id} value={data.level}>
                          {data.level}
                        </option>
                      ))}
                    </CSelect>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <br />
            <center>
              <CButton
                className="mt-4 btn btn-outline-info"
                onClick={sendForm}
              >
                Send
              </CButton>{" "}
              &emsp;
              <CButton
                className="mt-4 btn btn-outline-danger"
                onClick={resetForm}
              >
                Reset
              </CButton>
            </center>
          </CCol>
        </CRow>
      </div>
    );
  };
  
  export default NewMenu;