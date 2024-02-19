import React, {useEffect, useRef,useState} from "react";
import "../styles/tour-details.css";
import {Container,Row,Col,Form } from "reactstrap";
import {useParams} from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import useFetch from "./../hooks/useFetch";
import {BASE_URL} from "./../utils/config";


const TourDetails = () => {
    const {id}=useParams();
    const reviewMsgRef=useRef('');
    const [tourRating,setTourRating]=useState(null)
    const {data:tour,loading,error}=useFetch(`${BASE_URL}/tours/${id}`);
    
    const {photo,title,desc,price,reviews,city,maxGroupSize}=tour

    const {totalRating,avgRating} = calculateAvgRating(reviews)
    
    const submitHandler = e => {
        e.preventDefault();
        const reviewsText=reviewMsgRef.current.value;
        alert(`${reviewsText},${tourRating}`);
    };

    useEffect(()=> {
        window.scrollTo(0,0);
    },[tour])

    return <>
    <section>
    <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {
            !loading && !error && <Row>
            <Col lg="8">
                <div className="tour__content">
                    <img src={photo} alt=""/>
                <div className="tour__info">
                    <h3>{title}</h3>
                    <div className="d-flex align-items-center gap-5">
                        <span className="d-flex align-items-center gap-1">
                            <i class="ri-star-s-fill" style={{'color':"var(--secondary-color"}}></i>
                            {calculateAvgRating===0 ? null:avgRating}
                            {totalRating===0 ? ("Not rated"):(
                                <span>({reviews?.length})</span>
                            )}
                        </span>
    
                        <span>
                            <i class="ri-map-pin-fill"></i> {city}
                        </span>
                        <span>
                            <i class="ri-money-dollar-circle-line"></i> ${price} /per person
                        </span>
                        <span>
                            <i class="ri-group-line"></i> {maxGroupSize}
                        </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                </div>
    
                <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length})</h4>
                    <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                            <span onClick={()=>setTourRating(1)}>
                                1 <i class="ri-star-s-fill"></i>
                            </span>
                            <span onClick={()=>setTourRating(2)}>
                                2 <i class="ri-star-s-fill"></i>
                            </span>
                            <span onClick={()=>setTourRating(3)}>
                                3 <i class="ri-star-s-fill"></i>
                            </span>
                            <span onClick={()=>setTourRating(4)}>
                                4 <i class="ri-star-s-fill"></i>
                            </span>
                            <span onClick={()=>setTourRating(5)}>
                                5 <i class="ri-star-s-fill"></i>
                            </span>
                        </div>
    
                        <div className="review__input">
                            <input type="text"ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                            <button className="btn primary__btn text-white" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
                </div>
            </Col>
            <Col lg='4'>
                <Booking tour={tour}/>
            </Col>
            </Row>
        }
    </Container>
    </section>
    </>
};

export default TourDetails;