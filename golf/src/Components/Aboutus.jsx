import React from 'react';
import aboutimg1 from '../assets/page2-left.avif';
import aboutimg2 from '../assets/page2-right.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Aboutus = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        // <div className="py-16 px-10 bg-green-500 text-white text-center">
        //     <h2 className="text-4xl font-bold">About Us</h2>
        //     <p className="mt-4 text-lg w-4/5 mx-auto">
        //         Sidcup Family Golf is the ultimate destination for fun, food, and golf!
        //         Located in South East London, we offer a wide range of activities that
        //         the whole family can enjoy. Whether you're looking to improve your game,
        //         have a fun day out, or simply relax with some good food, we've got you covered.
        //     </p>
        // </div>


        <div id="page2" className=" w-full z-10 bg-black">
            <div id="scroller" className="whitespace-nowrap overflow-x-auto overflow-y-hidden relative z-10">
                {/* Scroller content */}
                {/* ... (same as before) */}
            </div>

            <div id="about-us" className="h-[40vh] w-full flex px-[50px] items-center justify-around relative z-10">
                <img src={aboutimg1} alt="About Us 1" className="w-[220px] h-[220px] rounded-[20px] object-cover"
                    data-aos="fade-left"

                />
                <div id="about-us-in" className="w-1/2 text-center">
                    <h3 className="text-[54px] font-extrabold mb-[30px] text-white">ABOUT US</h3>
                    <p className="text-[20px] leading-[26px] text-white">
                        Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
                    </p>
                </div>
                <img src={aboutimg2} alt="About Us 2" className="w-[220px] h-[220px] rounded-[20px] object-cover" />
            </div>
        </div>
    );
};

export default Aboutus;
