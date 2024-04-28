import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import imh1 from './img/download.jpg';
import imh2 from './img/monyh.jpg';
import imh3 from './img/dragon.jpg';
import imh4 from './img/onep.jpg';
import img1 from './img/leo1.jpg'
import img2 from './img/cm.jpg'

function P() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    const data=[
        {
          id:1,
          name:"Stanger Thinks",
    img:imh1,
        },{
          id:2,
          name:"money heast",
          img:imh2,
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
        }
      ]
      const data2=[
        {
          id:1,
          name:"leo",
    img:img1,
        },
        {
          id:2,
          name:"caption miller",
          img:img2,
        },
        {
          id:2,
          name:"caption miller",
          img:img2,
        }
      ]
  // ... (your existing code)

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const filteredData2 = data2.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const renderSlider = (data) => (
    <Slider {...settings}>
      {data.map(item => (
        <div className='d-flex justify-content-between' key={item.id}>
          <Row>
            <Col md={3}></Col>
            <Col md={6} className='d-flex justify-content-between'>
              <Image className='img d-flex' src={item.img} width={'350px'} height={'250px'} fluid></Image>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="App">
      <Container>
        {/* ... (your existing code) */}

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {renderSlider(filteredData)}

        {renderSlider(filteredData2)}

      </Container>
    </div>
  );
}

export default P;
