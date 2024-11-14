// src/components/CallToAction.jsx
import React from 'react';
import topTracerImg from '../assets/page2-left.avif';
import golfLessonsImg from '../assets/page2-right.avif';
import adventureGolfImg from '../assets/page2-right.avif';

function Waitingfor() {
    return (
        <div id="page4" className="h-[30vh] w-full flex items-center justify-center gap-[70px] relative bg-black">
            <h1 className="text-[6.4vw] mb-9 absolute top-[-15%] font-black font-gilroy text-black [-webkit-text-stroke:2px_#fff]"

                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"

            >
                WHAT ARE YOU WAITING FOR?
            </h1>
            <CTAElement title="TOPTRACER RANGE" image={topTracerImg} />
            <CTAElement title="GOLF LESSONS" image={golfLessonsImg} />
            <CTAElement title="ADVENTURE GOLF" image={adventureGolfImg} />
        </div>
    );
}

function CTAElement({ title, image }) {
    return (
        <div className="elem h-[70%] mt-[40px] w-[26%] overflow-hidden rounded-[20px] relative group">
            {/* Title that scales up on hover */}
            <h2 className="h-full w-full bg-[#95c11e] flex text-black font-extrabold items-center justify-center transition-transform duration-500 text-[2vw] absolute z-10 group-hover:scale-110 group-hover:text-[2.2vw]">
                {title}
            </h2>

            {/* Image that fades in on hover */}
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-125"
            />
        </div>
    );
}




export default Waitingfor;

