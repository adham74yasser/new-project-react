import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";


export function About(){
    return <section className="min-vh-100 d-flex flex-column justify-content-center">
        <div className=" p-5">
            <h2 className="text-center">ABOUT THE COMPANY</h2>
            <p className="text-center">Key features of our company</p>
            <div className="box row py-5">
                <div className="card col-12 col-md-4 col-lg-3 border-0">
                    <div className="head-card text-center">
                        <HiComputerDesktop className="display-1 mb-3" />
                        <p>Responsive</p>
                    </div>
                    <div className="body-card text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo quod eligendi perferendis ad fuga, accusamus, optio obcaecati tempore repellendus qui cum corrupti corporis, rerum dolores eveniet? Iure, repudiandae aperiam.</p>
                    </div>
                </div>
                <div className="card col-12 col-md-4 col-lg-3 border-0">
                    <div className="head-card text-center">
                        <FaHeart className="display-1 mb-3"/>
                        <p>Passion</p>
                    </div>
                    <div className="body-card text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo quod eligendi perferendis ad fuga, accusamus, optio obcaecati tempore repellendus qui cum corrupti corporis, rerum dolores eveniet? Iure, repudiandae aperiam.</p>
                    </div>
                </div>
                <div className="card col-12 col-md-4 col-lg-3 border-0">
                    <div className="head-card text-center">
                        <IoDiamondOutline className="display-1 mb-3" />
                        <p>Design</p>
                    </div>
                    <div className="body-card text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo quod eligendi perferendis ad fuga, accusamus, optio obcaecati tempore repellendus qui cum corrupti corporis, rerum dolores eveniet? Iure, repudiandae aperiam.</p>
                    </div>
                </div>
                <div className="card col-12 col-md-4 col-lg-3 border-0">
                    <div className="head-card text-center">
                        <FaGear className="display-1 mb-3" />
                        <p>Support</p>
                    </div>
                    <div className="body-card text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo quod eligendi perferendis ad fuga, accusamus, optio obcaecati tempore repellendus qui cum corrupti corporis, rerum dolores eveniet? Iure, repudiandae aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}