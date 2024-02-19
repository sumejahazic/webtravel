import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:922,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                setting:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aut impedit minima exercitationem animi delectus officia modi veniam veritatis, est, non consectetur. Natus obcaecati quia hic, corporis consequatur ducimus vel.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                
                <div>
                    <h5 className="mb-0 mt-3">Client 1</h5>
                    
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aut impedit minima exercitationem animi delectus officia modi veniam veritatis, est, non consectetur. Natus obcaecati quia hic, corporis consequatur ducimus vel.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                
                <div>
                    <h5 className="mb-0 mt-3">Client 2</h5>
                    
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aut impedit minima exercitationem animi delectus officia modi veniam veritatis, est, non consectetur. Natus obcaecati quia hic, corporis consequatur ducimus vel.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                
                <div>
                    <h5 className="mb-0 mt-3">Client 3</h5>
                    
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aut impedit minima exercitationem animi delectus officia modi veniam veritatis, est, non consectetur. Natus obcaecati quia hic, corporis consequatur ducimus vel.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                
                <div>
                    <h5 className="mb-0 mt-3">Client 4</h5>
                    
                </div>
            </div>
        </div>
    </Slider>
};
 
export default Testimonials;