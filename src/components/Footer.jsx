import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        };
    return <footer className="bg-dark p-5">
        <div className="container d-flex flex-column  flex-md-row justify-content-between align-items-center">
            <p className="m-0 fs-4 text-light d-flex align-items-center">Powered by<a href="" className="text-decoration-none text-light px-2">Bravo</a></p>
            <div className="">
                <FaFacebook className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
                <FaInstagram className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
                <FaLinkedin className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
                <FaPinterest className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
                <FaSnapchatGhost className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
                <FaTwitter className="fs-2 icons-hov text-light cursor-pointer transition pb-2"/>
            </div>
            <a href="#" onClick={scrollToTop} className="btn btn-danger fs-4 text-decoration-none text-light  d-flex align-items-center"><FaArrowUp className="fs-4 mx-2 icons-hov text-light cursor-pointer transition"/>To the top</a>
        </div>
    </footer>
}