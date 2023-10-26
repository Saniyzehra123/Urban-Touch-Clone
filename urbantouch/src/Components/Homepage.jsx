import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { GrPlayFill } from 'react-icons/gr'
import "./Homepage.css"
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { BiRupee } from "react-icons/bi";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { Carousel, CarouselItem } from 'react-bootstrap'
import Placeholder from 'react-bootstrap/Placeholder';

export default function Homepage() {

    const [video, setvideo] = useState(true)
    const [home, sethome] = useState([]);
    const [clicked,setClicked]=useState(false)

    const handelClick=()=>{
      setClicked(!clicked)
    }
    
    const handleplay = () => {
        setvideo(!video)

    }
    const features = [
        {
            id: 1,
            image: "https://user-images.githubusercontent.com/96076158/265270384-e5018f19-d518-4f25-a058-cfaba7f07a47.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270390-fa6b18f1-f4a9-4223-9e23-69e95b456a56.jpg",
            title: "Wine Checkerd Shirt",
            price: 1699,
        },
        {
            id: 2,
            image: "https://user-images.githubusercontent.com/96076158/265269454-904a62ff-3537-4848-90f4-04593ac3a289.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265260863-37f73b3c-b90b-4d30-9a09-24f251ec2850.jpg",
            title: "Slim Fit Cotton Linen Plain White Shirt",
            price: 1699,
        },
        {
            id: 3,
            image: "https://user-images.githubusercontent.com/96076158/265270065-84db9273-6bd4-419f-8cf4-17d9001d5538.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270088-98589f60-cab7-4c60-917d-cc2dd0eb2710.jpg",
            title: "Dark Blue Stripes Shirt",
            price: 1699,
        },
        {
            id: 4,
            image: "https://user-images.githubusercontent.com/96076158/265270095-5fa762d2-b750-45c0-923e-014eab7c4764.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270113-586632a3-3911-437f-a752-2f72866bbc86.jpg",
            title: "Slim Fit Black shirt with jacquard self pattern",
            price: 1699,
        },
        {
            id: 5,
            image: "https://user-images.githubusercontent.com/96076158/265270132-896e2992-16e6-4759-8310-3ca0104f81dd.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270144-d8b26173-523d-42bb-8f98-fbd14506f75c.jpg",
            title:  "Slim Fit Yellow Printed Shirt",
            price: 1699,
        },
        {
            id: 6,
            image: "https://user-images.githubusercontent.com/96076158/265270176-b791ef1c-7410-4fb5-889b-bf792cac857b.jpg",
            image2: " https://user-images.githubusercontent.com/96076158/265270195-94f98d0f-97e7-4a6e-8363-1728ff36d924.jpg",
            title: "Black Plain Shirt",
            price: 1499,
        },
        {
            id: 7,
            image: "https://user-images.githubusercontent.com/96076158/265270210-bb089710-3371-4789-a73a-ceb9b284d691.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270219-fba62854-e26c-4c0c-95c3-b5d599c8b7fa.jpg",
            title: "Dak Gn Checked Shirt",
            price: 1399,
        },
        {
            id: 8,
            image: "https://user-images.githubusercontent.com/96076158/265270236-519bfe46-fc9a-4e9b-9138-f6afcaaa6181.jpg",
            image2: "https://user-images.githubusercontent.com/96076158/265270251-d5d15d5c-c6db-44c9-b81c-fbb640100f88.jpg",
            title: "Slim Fit Green Check Shirt Long Sleeve",
            price: 1599,
        }
    ]

    return (
        <>
         <div className='Carousel'> 
          <Row style={{marginTop:"150px"}}>
                <Carousel data-bs-theme="dark">
                    <CarouselItem className='urbanpic'>
                        <img  
                            src="https://cdn.shopify.com/s/files/1/2381/1785/files/web_banner.jpg?v=1654243325&width=1500" alt="" />
                    </CarouselItem>
                    <CarouselItem className='urbanpic'>
                        <img  
                            src="https://www.urbantouch.in/cdn/shop/files/web_banner_2.jpg?v=1679114780&width=1500ac" alt="" />
                    </CarouselItem>
                    <CarouselItem className='urbanpic'>
                        <img  
                            src="https://www.urbantouch.in/cdn/shop/files/web_banner_1.jpg?v=1679114894&width=2000" alt="" />
                    </CarouselItem>
                </Carousel>
            </Row>
            </div>
            <Container>
                <Row>
                    <div className='h2'>Featured products</div>
                    {
                    features.map((item) => {
                    return (
                    <Col xs={12} sm={6} md={4} lg={3} style={{padding:"20px"}} key={item.id}>
                        <Card style={{ width: '15rem',height:"400px"}}   >
                        <div  className="prodimgs" onClick={handelClick}   > 
                        {clicked ? (
                          <AiOutlineHeart className='heart'   />
                                 ) : (
                             <AiFillHeart className='heart'   />
                            )}
                            <Card.Img   variant="top" src={item.image} alt="img" className="fecimg" />
                            <Card.Img variant="top" src={item.image2} alt="img" className="flip" />
                        </div>
                        <Card.Title style={{fontSize:15,height:"40px",padding:"10px"}}>{item.title}</Card.Title>
                        <Col className='p-2 d-flex justify-content-between '>
                        <Card.Text  className='prodimgstext'>
                           <BiRupee/>
                            {item.price}
                            </Card.Text>
                            <div className='d-flex justify-content-between '>
                             <AiOutlineStar className='text-success mt-1'/>
                             <AiOutlineStar className='text-success mt-1'/>
                             <AiOutlineStar className='text-success mt-1'/>
                             <AiOutlineStar className='text-success mt-1'/>
                             <AiOutlineStar className='text-success mt-1'/>
                             
                            </div>
                            
                        </Col>
                            

                        </Card>
                    </Col> )
                    }
                    )
                    } 
                </Row>
            </Container> 
       
{/* 
            <Row  onClick={handleplay}>
                {
                    video ?
                        <Image src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch_1_96b59a43-e1df-4631-8ef2-3e04198c1e3d.jpg?v=1519987513&width=1500" alt="" /> :
                        <ReactPlayer controls url='https://youtu.be/ywX9rSu38wc' width='100%' height='100%' />
                }
                <div className={video ? '' : "icondisplaydiv"}>
                    <div className='iconplay'>
                        <GrPlayFill />
                    </div>
                </div>
            </Row> */}
            
            <div className='videodiv'> 
            <Row  onClick={handleplay}>
                 
                {
                    video ?
                        <Image style={{width:"100%", height:"500px"}} src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch_1_96b59a43-e1df-4631-8ef2-3e04198c1e3d.jpg?v=1519987513&width=1500" alt="" /> :
                        <ReactPlayer controls url='https://youtu.be/ywX9rSu38wc'  width='100%' height='600px'  />
                }
                <div className={video ? '' : "icondisplaydiv"}>
                    {
                        video ?  <BsPlayCircle style={{fontSize:"50px"}} className='iconplay'/> : ""
                    }
                     
                </div>
              
            </Row>
            </div>
        </>
    )
}


