import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Detail() {
 
   const [users, setUsers] = useState([])
  

   const fetchData = async() =>{
   await axios.get(`http://localhost:8000/alldatas`)
    .then(response =>{
        return response.data
    })
    .then(data =>{
        setUsers(data)
    })
   }

   useEffect(() =>{
    fetchData()
   }, [])
   
   return(
    <div>
        <h1 className='text-center bg-dark text-white'>Workers Profile</h1>
        <Container >
            <Row className='rr'>
                {users.map((detail,id) => (
                    <Col lg='4' className='me-2 ms-4 mt-5 bg-info  box' key={id}>
                        <div className='ms-4'>
                        <label className='lbl'>Name:</label><span>{detail.name}</span>
                       <br></br>
                       <label className='lbl'>Email-id:</label><span>{detail.mail}</span>
                       <br></br>
                       <label className='lbl'>Location:</label><span>{detail.location}</span>
                       <br></br>
                       
                       
                       <Button  className='mb-4 di btt'><Link to={`Moreinfo/${detail.id}`}>For MoreInfo</Link></Button> 
                       </div>
                       
                    </Col>
                )
                )}
            </Row>
        </Container>
    </div>
   )

}

export default Detail;
