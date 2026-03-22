import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";





export function Navbar(){
    let [Open , setOpen] = useState(false)
    const toggleMenu = () => setOpen(!Open); 
    const CloseMain = ()=> setOpen(false)
    return <nav className="position-fixed top-0 w-100 z-3 bg-light shadow" >
        <div className="container-fluid d-flex row g-0 align-items-center h-100">
            <div className="navbar-brand col-2 ">
                <a href=""  className="text-decoration-none text-dark p-2 fs-3">Logo</a>
            </div>
            <div className="navbar-like col-10 h-100">
                <ul className="h-100 d-flex  list-unstyled align-items-center justify-content-end m-0">
                    <li className=" d-none d-md-flex align-items-center li-hov h-100 p-2 cursor-pointer "><a href="" className="text-decoration-none text-dark p-2">ABOUT</a></li>
                    <li className=" d-none d-md-flex align-items-center li-hov h-100 p-2 cursor-pointer ">
                        <FaUser className="fs-6"/>
                        <a href="" className="text-decoration-none text-dark p-2">TEAM</a>
                    </li>
                    <li className=" d-none d-md-flex align-items-center li-hov h-100 p-2 cursor-pointer ">
                        <FaTh />
                        <a href="" className="text-decoration-none text-dark p-2">WORK</a>
                    </li>
                    <li className=" d-none d-md-flex align-items-center li-hov h-100 p-2 cursor-pointer ">
                        <FaDollarSign />
                        <a href="" className="text-decoration-none text-dark p-2">PRICING</a>
                    </li>
                    <li className=" d-none d-md-flex align-items-center li-hov h-100 p-2 cursor-pointer ">
                        <FaEnvelope />
                        <a href="" className="text-decoration-none text-dark p-2">CONTACT</a>
                    </li>
                    <li onClick={toggleMenu} className="d-flex d-md-none px-4 fs-1 cursor-pointer"><VscListSelection /></li>
                </ul>
            </div>
            {Open && (
            <div className="w-50 d-flex flex-column bg-dark vh-100 position-fixed top-0 d-md-none">
                <div className="close w-100 d-flex justify-content-end p-3">
                    <IoMdClose onClick={CloseMain} className="text-light fs-1 w-25 cursor-pointer " />
                </div>
                <ul className="list-unstyled">
                    <li  onClick={CloseMain} className="li-hov w-100 px-3 py-2 cursor-pointer "><a href="" className="text-decoration-none text-light">ABOUT</a></li>
                    <li  onClick={CloseMain} className="li-hov w-100 px-3 py-2 cursor-pointer "><a href="" className="text-decoration-none text-light">TEAM</a></li>
                    <li  onClick={CloseMain} className="li-hov w-100 px-3 py-2 cursor-pointer "><a href="" className="text-decoration-none text-light">WORK</a></li>
                    <li  onClick={CloseMain} className="li-hov w-100 px-3 py-2 cursor-pointer "><a href="" className="text-decoration-none text-light">PRICING</a></li>
                    <li  onClick={CloseMain} className="li-hov w-100 px-3 py-2 cursor-pointer "><a href="" className="text-decoration-none text-light">CONTACT</a></li>
                </ul>
            </div>
            )}
        </div>
    </nav>
}