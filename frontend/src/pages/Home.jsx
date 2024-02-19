import React from "react";
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg03 from '../assets/images/hero-img03.jpg'
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonial";

const Home = () => {
    return <>

    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <h1>To travel is to <span className="highlight">live</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur laudantium enim accusamus atque? Placeat doloribus nam repellendus quaerat officia consectetur! Molestiae, labore consequatur eligendi ullam incidunt facilis atque reiciendis modi.</p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg03} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-4">
                        <img src={heroImg} alt="" controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt=""/>
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
    
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row> 
                <Col lg='12' className="mb-5">
                    <h2 className="featured__tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        
                        <h2>With our all experience<br/> we will serve you</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br/>
                            Quas aliquam, hic tempora inventore suscipit unde.
                        </p>
                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>10k+</span>
                            <h6>Successfull Trips</h6>
                        </div>
                        <div className="counter__box">
                            <span>1k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className="counter__box">
                            <span>7+</span>
                            <h6>Years of experience</h6>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
        
                    <h2 className="galerry__title">Visit our tour gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className="testimonial__title">What our clients say about us</h2>
                </Col>
                <Col lg="12">
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
};

export default Home;