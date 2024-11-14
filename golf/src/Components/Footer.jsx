// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white py-8">
//             <div className="container mx-auto text-center">
//                 <p className="text-lg font-medium">© 2024 Sidcup Family Golf</p>
//                 <p className="mt-2">123 Golf Course Rd, Sidcup, SE London, UK</p>
//                 <p className="mt-1">Contact: info@sidcupfamilygolf.com | Phone: +44 123 456 7890</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;




// src/components/Footer.jsx
import React from 'react';


function Footer() {
    return (
        <div id="footer" className="h-[40vh] w-full bg-gradient-to-bl from-[#119f3a] to-[#a3d421] relative flex items-center justify-start gap-[6.5vw] px-[100px]">
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="Footer Dots" className="absolute left-0 h-full z-0" />
            <div id="f1" className="relative z-[99]">
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="Logo" className="h-[100px]" />
            </div>
            <div id="f2" className="relative z-[99]">
                <h3 className="text-[1.6vw] uppercase text-black font-black mb-2">TOPTRACER Ranges</h3>
                <h3 className="text-[1.6vw] uppercase text-black font-black mb-2">Golf Lessons</h3>
                <h3 className="text-[1.6vw] uppercase text-black font-black mb-2">Adventure Golf</h3>
            </div>
            <div id="f3" className="relative z-[99]">
                <h3 className="text-[1.6vw] uppercase text-black font-extrabold mb-2">coffee shop</h3>
                <h3 className="text-[1.6vw] uppercase text-black font-extrabold mb-2">LEAGUES</h3>
                <h3 className="text-[1.6vw] uppercase text-black font-extrabold mb-2">Contact us</h3>
            </div>
            <div id="f4" className="relative z-[99]">
                <h4 className="text-[1vw] uppercase text-black font-semibold leading-[20px] mb-2">
                    A20, SIDCUP BYPASS <br />
                    CHISLEHURST <br />
                    KENT <br />
                    BR7 6RP <br />
                    TEL: 0208 309 0181 <br />
                    GET DIRECTIONS <br />
                </h4>
            </div>
        </div>
    );
}

export default Footer;