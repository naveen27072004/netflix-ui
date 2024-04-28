import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import'./leo.css';
import vj from './img/leovj.jpg'
import ani from './img/anir.jpg'
import logesh from './img/logesh.jpg'
import thirsa from './img/thi.jpg'
import Slider from 'react-slick';
const Leo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const leodata=[
    {
id:1,
name:'vj',
img:vj,
    },{
      id:2,
      img:ani,
    },
    {
      id:3,
      img:logesh,
    },{
      id:4,
      img:thirsa
    },
  ]
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Image className='leoimg' src={require('./img/leo.jpg')} fluid></Image>
          </Col>
          <Col>
          <h3 className='leodet'>Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.
Initial release: 18 October 2023
<br />
<li>Director: Lokesh Kanagaraj</li>
<li>Producers: Ss Lalit Kumar, Jagadish Palanisamy</li>
<li>Box office: est. ₹600–620 crore</li>
<li>Music director: Anirudh Ravichander, Anirudh</li>
<li>Based on: A History of Violence; by David Cronenberg</li>
</h3>
  
          </Col>
          <center><h3 className='char'>Charceter</h3></center>
          <Slider {...settings}>
        {leodata.map(leooo=>(
          <div>
            <Col>
            
            <img className='charimg' src={leooo.img} alt="" width={'200px'} height={'200px'} />
            </Col>
          </div>
        ))}
      </Slider>
        </Row>
      
      </Container>
        
      
    </div>
  )
}

export default Leo