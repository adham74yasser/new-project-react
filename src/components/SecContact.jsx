import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import mapImg from "../assets/img/map.jpg"

export function Contact(){
    return <section className="min-vh-100 my-5 p-5">
        <h2>CONTACT</h2>
        <p>Lets get in touch. Send us a message:</p>
        <div className="container row g-0">
            <div className=" col-12 col-md-6">
                <div className="d-flex flex-column w-75 gap-3">
                    <input className="p-2 text-uppercase" type="text"  placeholder="text"/>
                    <input className="p-2 text-uppercase" type="email" placeholder="email" />
                    <input className="p-2 text-uppercase" type="text"  placeholder="Subject"/>
                    <input className="p-2 text-uppercase " type="text"  placeholder="messag"/>
                    <a href=""className="btn btn-dark text-light d-flex align-items-center justify-content-center"><FaPaperPlane className="mx-2"/>SEND MESSAGE</a>
                </div>
                <div className="my-4">
                    <p className="fs-4"><FaLocationDot className="mx-2" />Chicago, US</p>
                    <p className="fs-4"><FaPhoneAlt className="mx-2" /> Phone: +00 151515</p>
                    <p className="fs-4"><FaEnvelope className="mx-2" />Email: mail@mail.com</p>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card h-100 overflow-hidden shadow">
                    <img className="h-100 " src={mapImg} alt="" />
                </div>
            </div>
        </div>
    </section>
}