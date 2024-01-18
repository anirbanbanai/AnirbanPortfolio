import React from 'react';
import { CiGlobe, CiHome } from 'react-icons/ci';
import { FcContacts, FcServices } from 'react-icons/fc';
import img from '../../assest/IMG_20230312_193407.jpg'
import Image from 'next/image';
const ButttomNavbar = () => {
    return (

    
        <div className='fixed bottom-0 z-10 w-full  bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden nnn'>

            <ul className=" flex gap-2 justify-between items-center">
               
                <li className="pp bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><a href="#home" className="text-xl font-semibold"> <CiHome className="text-2xl" /> </a></li>

                <li className="pp bg-slate-300 rounded-full  hover:bg-slate-500 hover:text-white"><a href="#about" className="text-xl font-semibold">

                {/* <img className=" rounded-full" width={52} src={img} alt="" /> */}

                <Image className='rounded-full'  src={img} width={52}  alt='img'/>
                    </a></li>

                <li className="pp bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><a href="#service" className="text-xl font-semibold"><FcServices className="text-2xl" /> </a></li>

                <li className="pp bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><a href="#skill" className="text-xl font-semibold"><CiGlobe className="text-2xl" /> </a></li>
                <li className="pp bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><a href="#contact" className="text-xl font-semibold"><FcContacts className="text-2xl" /></a></li>
              
             
            </ul>

        </div>
    );
};

export default ButttomNavbar;