import React from 'react'
import logo from './logo.svg';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import imh1 from './img/download.jpg';
import imh2 from './img/monyh.jpg';
import imh3 from './img/dragon.jpg';
import imh4 from './img/onep.jpg';
import img1 from './img/leo1.jpg'
import img2 from './img/cm.jpg'
import img3 from './img/a.jpg'
import img4 from './img/vikram.jpg'
import img5 from './img/jailer.jpg'
import mimg1 from './img/hulk.jpg'
import mimg2 from './img/ironman.jpg'
import mimg3 from './img/spider.jpg'
import mimg4 from './img/caption.jpg'
import mimg5 from './img/black.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Leo from './Leo';
const Main = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      const data3=[
        {
          id:1,
          name:"hulk",
          img:mimg1,
          now:"marvel"
        },
        {
          id:2,
          name:"ironman",
          img:mimg2,
          now:"marvel"
        },
        {
          id:3,
          name:"spiderman",
          img:mimg3,
          now:"marvel"
        },
        {
          id:4,
          name:"caption america",
          img:mimg4,
          now:"marvel"
        },
        {
          id:5,
          name:"blackpanther",
          img:mimg5,
          now:"marvel"
        },
      ]
      const data=[
        {
          id:1,
          name:"Stanger Thinks",
    img:imh1,
    now:"trending",
        },{
          id:2,
          name:"money heast",
          img:imh2,
          now:"trending"
        },
        {
          id:3,
          name:"one pice",
          img:imh3,
          
        },
        {
          id:4,
          name:"game of throwns",
          img:imh4,
          now:"trending",
        }
      ]
      const data2=[
        {
          id:1,
          name:"leo",
    img:img1,
    now:"trending"
        },
        {
          id:2,
          name:"caption miller",
          img:img2,
        },
        {
          id:2,
          name:"vikram",
          img:img4,
        },
        {
          id:2,
          name:"jailer",
          img:img5,
        },
        {
          id:2,
          name:"caption miller",
          img:img2,
          now:"tamil",
          
        },
        {
          id:1,
          name:"aailan",
    img:img3,
    now:"tamil"}
      ]
     const [btnfilter,setbtnfilter]=useState('');
     const filter=(filtervalue)=>{
    setbtnfilter(filtervalue);
     } 
    
      const [searchitm,setsearchitem]=useState('');
      const filterdata=data.filter(item=>item.name.toLowerCase().includes(searchitm));
      const filterdata2=data2.filter(item2=>item2.name.toLowerCase().includes(searchitm));
      const search=(e)=>{
    const searchitm=e.target.value.toLowerCase();
    setsearchitem(searchitm);
      }
    const sum=(name)=>{
      if(name==='leo'){
        window.location.href = '/leo'
       
      }
      else if(name==='jailer'){
        window.location.href = '/jailer'
      }
      else{
        console.log(name)
      }
    
    
    }
    
      const renderslide=(data)=>(
        <Slider {...settings}>
        {data.map(item =>(
          <div className='d-flex justify-content-between'>
          
            <Row>
              <Col md={3}></Col>
              <div className="imh-container">
        <Col md={6} className='d-flex justify-content-between'>
       <img onClick={()=>sum(item.name)} className='img d-flex' src={item.img} width={'100%'} height={'250px'} fluid ></img>
        </Col>  
        </div>
        <Col md={3}>
      
    </Col> 
        </Row>
        </div>
        
    ))}
    </Slider>
      )
      const combaindata=[...data];
      const btnfilterdata =btnfilter ? combaindata.filter(item=>item.now===btnfilter):combaindata;
      const final=btnfilterdata.filter(item=>item.name.toLowerCase().includes(searchitm))
      const combaindata1=[...data2];
      const btnfilterdata2=btnfilter? combaindata1.filter(item=>item.now===btnfilter):combaindata1;
      const final2=btnfilterdata2.filter(item=>item.name.toLowerCase().includes(searchitm))
      const combaindata2=[...data3];
      const btnfilterdata3=btnfilter? combaindata2.filter(item=>item.now===btnfilter):combaindata2;
      const final3=btnfilterdata3.filter(item=>item.name.toLowerCase().includes(searchitm))
  return (
    <div className="App">
      <Container>
<Row>
   <Col>
   <div className="sticky-nav">
   <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#"><h3 className='tit'>Movie-US</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="navitm">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> <button className='btn' onClick={() => filter('trending')}>Trending</button></Nav.Link>
            <Nav.Link href="#action2"><button className='btn' onClick={() => filter('tamil')}>New</button></Nav.Link>
    
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          </div>
          <div className="input">
          <Form className="d-flex">
          <input 
  
  type="text"
  onChange={search}
  value={searchitm}
  placeholder='search...'
  />
            <Button className='srchbtn' variant="outline-success">Search</Button>
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </Col>
</Row>
      <Carousel fade>
      <Carousel.Item>
        <Image  className="d-block w-100" src={require('./img/ssgif.gif')} style={{ height: '400px' }}></Image>
        <Carousel.Caption>
          <h1 className='carcontent'>STANGER THINKS</h1>
          <a href="https://www.youtube.com/watch?v=b9EkMc79ZSU">  <button className='crbtn'>View</button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image  className="d-block w-100"src={require('./img/marvelgif.gif')} style={{ height: '400px' }}></Image>
        <Carousel.Caption>
          <h1 className='carcontent'>The End Game</h1>
          <a href="https://www.youtube.com/watch?v=hA6hldpSTF8">  <button className='crbtn'>View</button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image  className="d-block w-100" src={require('./img/mnygif.gif')} style={{height:'400px'}}></Image>
        <Carousel.Caption>
        <h1 className='carcontent'>Money Heaist</h1>
        <a href="https://www.youtube.com/watch?v=_InqQJRqGW4">  <button className='crbtn'>View</button></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{final.length>0? renderslide(final):<p className='resp'>no res found</p>}
 {renderslide(final2)};
 {renderslide(final3)} 
    </Container>
    </div>
  )
}

export default Main