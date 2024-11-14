import React from 'react'

function Nav() {
    return (
        <div>
            <div className='flex items-center gap-6 text-[20px] h-[130px] w-full bg-red-700 text-white fixed'>
                <img
                    src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
                    alt=""
                    height={"50px"}
                    width={"90px"}
                />
                <h4 className="hover:cursor-pointer">TOPTRACER RANGE</h4>
                <h4 className="hover:cursor-pointer">Golf Lessons</h4>
                <h4 className="hover:cursor-pointer">Adventure Golf</h4>
                <h4 className="hover:cursor-pointer">coffee shop</h4>
                <h4 className="hover:cursor-pointer">leagues</h4>
            </div>
        </div>
    )
}

export default Nav
