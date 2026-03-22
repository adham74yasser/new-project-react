import React from "react";
import { IoMdCamera } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";
import { FaRegImage } from "react-icons/fa";


export function Skills(){
    return <section className="p-5" style={{background:"#f1f1f1"}}>
        <div className="coantainer row g-0 d-flex ">
            <div className="col-12 col-md-6">
                <b className="fs-2">Our Skills.</b>
                <p className="w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <p className="w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="col-12 col-md-6">
                <div className="">
                    <p className="d-flex gap-2 align-items-center my-2"><IoMdCamera />Photography</p>
                    <div className="w-100 h-25 bg-sec position-relative z-1 text-center overflow-hidden">
                        <span className="bg-dark w-75 h-100 position-absolute start-0 z-n1"></span>
                        <b className="text-light">75</b>
                    </div>
                </div>
                <div className="">
                    <p className="d-flex gap-2 align-items-center my-2"><HiDesktopComputer />Web Design</p>
                    <div className="w-100 h-25 bg-sec position-relative z-1 text-center overflow-hidden">
                        <span className="bg-dark w-50 h-100 position-absolute start-0 z-n1"></span>
                        <b className="text-light">50</b>
                    </div>
                </div>
                <div className="">
                    <p className="d-flex gap-2 align-items-center my-2"><FaRegImage />Photoshop</p>
                    <div className="w-100 h-25 bg-sec position-relative z-1 text-center overflow-hidden">
                        <span className="bg-dark w-25 h-100 position-absolute start-0 z-n1"></span>
                        <b className="text-dark">25</b>
                    </div>
                </div>
            </div>
        </div>
    </section>
}