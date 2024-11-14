// // src/components/Testimonial.jsx
// import React from 'react';

// function Testimonial() {

//     return (
//         <div>
//             <img
//                 src=""
//                 alt=""
//             />
//             <div id="page3" className="h-screen w-full bg-[#000] flex items-center justify-center relative">
//                 <p className="text-[35px] text-white font-bold w-[60%] leading-[45px] text-center">
//                     Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven't been.
//                 </p>
//                 {/* Left Quote Image with scroll animation */}
//                 <img
//                     ref={leftQuoteRef}
//                     src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
//                     alt="Quote Left"
//                     className={`w-[60px] h-[60px] absolute left-[15%] top-[25%] transition-transform duration-1000 ease-in-out ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//                         }`}
//                 />
//                 <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="Quote Right" className="w-[60px] h-[60px] absolute bottom-[30%] right-[15%]" />
//             </div>


//         </div>
//     );
// }

// export default Testimonial;


// src/components/Testimonial.jsx
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    const leftQuoteRef = useRef(null);
    const rightQuoteRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.5 } // 50% of the element should be visible
        );

        if (leftQuoteRef.current && rightQuoteRef.current) {
            observer.observe(leftQuoteRef.current);
            observer.observe(rightQuoteRef.current);
        }

        return () => {
            if (leftQuoteRef.current && rightQuoteRef.current) {
                observer.unobserve(leftQuoteRef.current);
                observer.unobserve(rightQuoteRef.current);
            }
        };
    }, []);

    return (
        <div>
            <img src="" alt="" />
            <div
                id="page3"
                className="h-screen w-full bg-[#000] flex items-center justify-center relative"
            >
                <p className="text-[35px] text-white font-bold w-[60%] leading-[45px] text-center">
                    Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children entertained during the holidays. Worth a visit if you haven't been.
                </p>

                {/* Left Quote Image with scroll animation */}
                <img
                    ref={leftQuoteRef}
                    src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
                    alt="Quote Left"
                    data-aos="fade-down-left"
                    className={`w-[60px] h-[60px] absolute left-[15%] top-[25%] transition-transform duration-1000 ease-in-out`}
                />

                {/* Right Quote Image with scroll animation */}
                <img
                    ref={rightQuoteRef}
                    src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
                    alt="Quote Right"
                    data-aos="fade-up-left"
                    className={`w-[60px] h-[60px] absolute bottom-[30%] right-[15%] transition-transform duration-1000 ease-in-out `}
                />
            </div>
        </div>
    );
}

export default Testimonial;
