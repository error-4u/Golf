// src/components/Services.jsx
import React from 'react';
import topTracerImg from '../assets/card1.avif';
import adventureGolfImg from '../assets/card1.avif';
import golfLessonsImg from '../assets/card1.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <>
            <div id="cards-container" className="h-[60vh] bg-black flex items-center justify-center gap-[70px] relative z-10" >
                <ServiceCard
                    title="TopRacer Range"
                    image={topTracerImg}
                    data-aos="fade-right"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?"
                />
                <ServiceCard
                    title="Adventure Golf"
                    image={adventureGolfImg}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?"
                />
                <ServiceCard
                    title="Golf Lessons"
                    image={golfLessonsImg}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?"
                />
            </div>

            <div id="green-div" className="h-[30vh] flex items-center justify-between bg-gradient-to-bl from-[#119f3a] to-[#ace022]">
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="Dots" className="h-full object-cover w-[14%]" />
                <h4 className="w-[45%] leading-[50px] text-black text-center font-extrabold text-[27px] uppercase">
                    SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
                </h4>
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="Dots" className="h-full object-cover w-[14%]" />
            </div>
        </>
    );
}

// function ServiceCard({ title, image, description }) {
//     return (
//         <div className="card w-[24%] h-[80%] rounded-[20px] bg-cover bg-center overflow-hidden transition-all duration-600" style={{ backgroundImage: `url(${image})` }}
//             data-aos="zoom-in"
//         >
//             <div data-aos="fade-right" className="overlay h-full w-full bg-[#95c11e] p-[30px] pt-[160px] opacity-0 transition-all duration-600">
//                 <h4 className="text-black text-[40px] uppercase whitespace-nowrap mb-[20px] font-extrabold">{title}</h4>
//                 <p className="text-black text-[18px]">{description}</p>
//             </div>
//         </div>
//     );
// }
function ServiceCard({ title, image, description }) {
    return (
        <div
            data-aos="zoom-in"
            className="card w-[24%] h-[80%] rounded-[20px] bg-cover bg-center overflow-hidden relative transition-all duration-500 group"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay content that appears on hover */}
            <div

                className="overlay h-full w-full bg-[#95c11e] p-[30px] pt-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute top-0 left-0"

            >
                <h4 className="text-black text-[40px] uppercase whitespace-nowrap mb-[20px] font-extrabold">{title}</h4>
                <p className="text-black text-[18px]">{description}</p>
            </div>

            {/* Image that fades out on hover */}
            <div
                className="h-full w-full bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0 absolute top-0 left-0"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </div>
    );
}




export default Services;