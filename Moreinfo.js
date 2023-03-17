import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Moreinfo() {
 
  const [user, setUser] = useState([]);
  
  const {id} = useParams();
  const profile=id;


  const fetchData = async () =>{
    await axios.get(`http://localhost:8000/alldatas?id=${profile}`)
    
    .then(response =>{
      return response.data
      
    })
    .then(data =>{
      setUser(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h1 className='text-center bg-dark text-white'> Worker profile : {id}</h1>
      <Container>
          {user.map(info =>(
            <Container key={id}>
              <Row>
                <Col>
                    <h1 className='text-center bg-info tablet mt-5'>{info.name}</h1>
                    <Table className='tablet'>
                      <tbody>
                        <tr>
                          <td><label className='lbl'>Name:</label></td><td>{info.name}</td>
                        </tr>
                        <tr>
                          <td><label className='lbl'>Email:</label></td><td>{info.mail}</td>
                        </tr>
                        <tr>
                          <td><label className='lbl'>Password:</label></td><td>{info.password}</td>
                        </tr>
                        <tr>
                          <td><label className='lbl'>Phone:</label></td><td>{info.phone}</td>
                        </tr>
                        <tr>
                          <td><label className='lbl'>Location:</label></td><td>{info.location}</td>
                        </tr>
                        
                      </tbody>
                      <Button className='btt ms-5 mt-3 mb-3 float-end'><Link to={`Delete/${info.id}`}>Delete</Link></Button>
                      <Button className='btt ms-5 mt-3 mb-3 float-end'><Link to={`Update/${info.id}`}>Edit</Link></Button> 
                      
                    
                    </Table>
                </Col>
              </Row>


            </Container>
          ))}
      </Container>
    </div>
  )
}

export default Moreinfo;

