import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";


function Register(){

    const[name,setName]=useState("");
    const[error,setError]=useState();

    const[mail,setMail]=useState("");
    const[merror,setMerror]=useState("");

    const[password,setPassword]=useState("");
    const[perror,setPerror]=useState("");

    const[phone,setPhone]=useState("");
    const[pherror,setPherror]=useState("");

    const[location,setLocation]=useState("");
    const[lerror,setlerror]=useState("");

    const[id,setId]=useState("");
    const[ierror,setIerror]=useState("");

    // const[cpass,setCpass]=useState("");
    // const[cerror,setCerror]=useState("");

    const validateForm = () =>{
        let c1="false", c2="false", c3="false", c4="false", c5="false", c6="false";
        if(name.length==0) {
        setError("Name must be entered");
        document.getElementById("re").style.border="2px solid red";
        }
        else{
            setError('');
            document.getElementById("re").style.border="2px solid green";
            c1="true";
        }
    
        let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail=="") {
            setMerror ("Please enter your email id");
            
        }
        else if (!k.test(mail)) {
            setMerror("Please enter valid email");
        }
        else{
            setMerror("");
            c2="true";
        }
        let d=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(password=="") {
            setPerror("please enter you password")
        }
        else if (!d.test(password)) {
            setPerror("The password must contain 6-16 characters")
        }
        else{
            setPerror("");
            c3="true";
        }
        let p=/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
        if(phone=="") {
            setPherror("please enter you phone number")
        }
        else if (!d.test(phone)) {
            setPherror("enter correct phone number")
        }
        else{
            setPherror("");
            c4="true";
        } 

        if(location.length==0) {
            setlerror("location must be entered");
            
            }
         else{
            setlerror('');
            c5="true";
            }
        if(id.length==0) {
            setIerror("Id must be entered");
            
            }
         else{
            setIerror('');
            c6="true";
            }    


        // if(cpass=="") {
        //     setCerror("confirm your password");
        // }
        // else if (!(cpass).match(pass)){
        //     setCerror("invald password")
        // }
        // else{
        //     setCerror("")
        //     c4="true";
        // }
       if((c1=="true")&&(c2=="true")&&(c3=="true")&&(c4=="true")&&(c5=="true")&&(c6=="true")){
        alert("your form is submitted")
        return true
       } 
       return false

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (validateForm()) {
            fetchData();
        }   
    }
    
    const fetchData = async() =>{
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name: name, mail:mail,pass:pass })
        // };
        await axios.post("http://localhost:8000/signin", {name: name, mail:mail, password:password, phone:phone, location:location, id:id})
        .then((response)=>{return response.data})
        .then((data)=>{
            console.log("ok=>"+data.name)
        }).catch((e)=>{
            console.log("err -->"+e)
        });
    }
    return(
        <>
<div className="task">
    <h2 className="title1">Registration Form</h2>
<form onSubmit={handleSubmit}>
    <label>ID:</label>
       < input type="text" placeholder="Enter your id" onChange={(e)=>{setId(e.target.value)}}></input><br></br>
       {ierror && <label>{ierror}</label>}<br></br>
   <label>Name:</label>
    <input type="text"id="re" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
    {error && <label>{error}</label>}<br></br>
   <label>Email ID:</label>
        <input type="text" placeholder="Enter your Email" onChange={(e)=>{setMail(e.target.value)}}></input><br></br>
        {merror && <label>{merror}</label>}<br></br>
        <label>password:</label>
       < input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
       {perror && <label>{perror}</label>}<br></br>
       <label>Phone number:</label>
       < input type="text" placeholder="Enter your phone-number" onChange={(e)=>{setPhone(e.target.value)}}></input><br></br>
       {pherror && <label>{pherror}</label>}<br></br>
       <label>Location:</label>
       < input type="text" placeholder="Enter your location" onChange={(e)=>{setLocation(e.target.value)}}></input><br></br>
       {lerror && <label>{lerror}</label>}<br></br>

       {/* <label>Confirm Password:</label>
       <input type="password" placeholder="Confirm Your password" onChange={(e)=>{setCpass(e.target.value)}}></input><br></br>
       {cerror && <label>{cerror}</label>}<br></br> */}
<Container className="click">
<button className="cli" type="submit">Register</button>
</Container>
</form>
</div>
</>
    )
}
export default Register;