import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Form.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const navigate =useNavigate();
    const[values,setvalues]=useState({
        email:"",
        pass:"",
    })
    const[errors,seterrors]=useState({})
    // const history=useHistory()
    const handlecng=(e)=>{
       const {name,value}=e.target
       setvalues((prevalues)=>{
        return{
            ...prevalues,
            [name]:value,
        }
       })
    }
    // navigate.push('/main');
    const sumbit=(e)=>{
e.preventDefault()
const isvalid=validate()
if(isvalid){
    navigate('/main');
}
else{
    console.log('pless fill corw');
}
    }
    const validate=()=>{
        let newerrors={}
        if(!values.email.trim()){
            newerrors.email="E-mail required"
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            newerrors.email="E-mail is in valid"
        }
        if(!values.pass.trim()){
            newerrors.pass="Password require"
        }
        else if(values.pass.length<6){
            newerrors.pass="please enter atleast 6 charceter"
        }
        seterrors(newerrors)
        return Object.keys(newerrors).length === 0;
    }
      return (
    <Container>
        <div className="back">
            <Row>
                <Col>
                <Navbar expand="lg" className="nav">
                <Navbar.Brand href="#"><h3 className='tit'>Movie-US</h3></Navbar.Brand>
                </Navbar>
                </Col>
            </Row>
        <Row>
            <Col>
            <div className="form">
            <form action="" onSubmit={sumbit}>
                <input 
                value={values.email}
                type="text"
                placeholder='Enter your G-mail'
                name='email'
                onChange={handlecng}
                /> <br />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <br />
                  <input 
                type="text"
                placeholder='Enter your password'
               value={values.pass}
                name='pass'
                onChange={handlecng}
                />
                <br />
                {errors.pass && <span style={{ color: 'red' }}>{errors.pass}</span>}
                <br />

                <button className='frmbtn' type='sumbit'>login</button>
            </form>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
  )
}

export default Form