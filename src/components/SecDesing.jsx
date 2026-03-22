import React from "react";
import { FaTh } from "react-icons/fa";
import img from '../assets/img/phone_buildings.jpg'

export function Desing(){
    return <section className="bg-sec min-vh-100 d-flex align-items-center px-1 px-md-5">
        <div className="d-flex row g-0 justify-content-between align-items-center  ">
            <div className="my-4 col-12 col-md-6 d-flex align-items-center  align-items-md-start flex-column">
                <h2>We know design</h2>
                <p className="w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <a href="" className="btn btn-dark px-3 d-flex align-items-center w-25 gap-2"><FaTh/> View Our Works</a>
            </div>
            <div className="card p-0 col-12 col-md-6 rounded-4 overflow-hidden ">
                <img className="w-100" src={img} alt="" />
            </div>
        </div>
    </section>
}