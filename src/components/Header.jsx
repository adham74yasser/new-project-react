import React ,{useState} from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export function Header(){
    return <header className="w-100 vh-100 d-flex flex-column justify-content-between">
        <div className="ps-5 h-100 d-flex justify-content-center flex-column">
            <h1 className="text-light display-4 fw-bold py-2">Start something that matters</h1>
            <p className="t-color fs-5">Stop wasting valuable time with projects that just isn't you.</p>
            <button className="btn col-10 col-md-2  py-2 btn-hov">Learn more and start today</button>
        </div>
        <div className="ps-5 header-icons d-flex gap-2">
            <FaFacebook className="fs-2 icons-hov cursor-pointer transition pb-2"/>
            <FaInstagram className="fs-2 icons-hov cursor-pointer transition pb-2"/>
            <FaLinkedin className="fs-2 icons-hov cursor-pointer transition pb-2"/>
            <FaPinterest className="fs-2 icons-hov cursor-pointer transition pb-2"/>
            <FaSnapchatGhost className="fs-2 icons-hov cursor-pointer transition pb-2"/>
            <FaTwitter className="fs-2 icons-hov cursor-pointer transition pb-2"/>
        </div>
    </header>
}