import React, { useState } from "react";
import { AiFillLeftCircle, AiFillHome, AiFillCalendar,AiOutlineUsergroupAdd, AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

import { FiMessageSquare } from "react-icons/fi";
import {  NavLink } from "react-router-dom";

function MentorSideNav() {
  const menus = [
    { name: "Home", link: "/home", icon: AiFillHome, },
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Settings", link: "/Settings", icon: RiSettings4Line},
    { name: "Schedule", link: "/Schedule", icon: AiFillCalendar, margin: true },
    { name: "Attandance", link: "/Attandance", icon: AiOutlineBarChart },
    { name: "students", link: "/studentlist", icon: AiOutlineUsergroupAdd , margin: true},
    { name: "Messages", link: "/Messages", icon: FiMessageSquare , },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className=" sm:flex gap-6 hidden  ">
      <div
        className={` ${open ? "w-60 " : "w-20 "
          } bg-gradient-to-b from-black  to-gray-500 min-h-screen p-5   relative duration-500`}
      >
        <AiFillLeftCircle
          className={`absolute text-white bg-gray-700 rounded-full cursor-pointer -right-4 top-20 w-10 h-10  
             ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-2 items-center">
          {/* <img
            src="./LOGO.png"
            className={`cursor-pointer w-14 duration-500 ${open && "rotate-[360deg]"
              }`}
          /> */}

          <div className={`text-white origin-left mt-4  duration-200  ${!open && "scale-0"
            }`}>
            <h1 className='font-extrabold leading-5 font-logo text-transparent tracking-wide 
                 text-l bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500'>PHOENIX ONLINE </h1>
            {/* <h1 className='text-white font-logo text-sm2'>Trek</h1> */}
          </div>
        </div>
        <div className=" flex justify-center items-center ">
        <ul className="pt-16">
          {menus.map((menu, index) => (
            <li  key={index} >
              <hr className={`${menu.margin ? "my-5 " : "hidden"} `}></hr>
            <NavLink to={menu.link}
             
              className={ ({ isActive }) =>
              isActive ? `flex mt-1 px-4 p-2 cursor-pointer  text-white font-semibold rounded-md  text-sm2 items-center gap-x-4 border-2  border-white
              ` : `flex mt-1 px-4 p-2 cursor-pointer hover:bg-gradient-to-tr hover:from-gray-600 hover:to-gray-800 hover:text-white rounded-md hover:border-white hover:border  text-gray-300 text-sm2 items-center gap-x-4 
              ` }
            >
                {React.createElement(menu?.icon, { size: "24" })}
              <span className={`${!open && "hidden"} origin-left duration-500 text`}>
                {menu.name}
              </span>
            </NavLink>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>

  );

}

export default MentorSideNav;