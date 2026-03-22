import React from "react";
import { FaEnvelope } from "react-icons/fa";
import img1 from "../assets/img/team2.jpg"
import img2 from "../assets/img/team1.jpg"
import img3 from "../assets/img/team3.jpg"
import img4 from "../assets/img/team4.jpg"
export function Team(){
    return <section className="min-vh-100 px-2 px-md-5 my-5 d-flex flex-column justify-content-center align-items-center ">
            <h2 className="text-center pb-3">THE TEAM</h2>
            <p className="text-center">The ones who runs this company</p>
            <div className="container row d-flex justify-content-center g-2 my-5">
                <div className="box col-12 col-md-4 col-lg-3">
                    <div className="card overflow-hidden ">
                        <img className="filter" src={img1} alt="" />
                        <div className="body-card d-flex flex-column gap-2 px-2 py-4 ">
                            <b className="fs-4">John Doe</b>
                            <span className="t-color">CEO & Founder</span>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <a href=""className="btn border btn-dark d-flex gap-2 justify-content-center align-items-center"><FaEnvelope />Contact</a>
                        </div>
                    </div>
                </div>
                <div className="box col-12 col-md-4 col-lg-3">
                    <div className="card overflow-hidden ">
                        <img className="filter" src={img2} alt="" />
                        <div className="body-card d-flex flex-column gap-2 px-2 py-4 ">
                            <b className="fs-4">John Doe</b>
                            <span className="t-color">CEO & Founder</span>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <a href=""className="btn border btn-dark d-flex gap-2 justify-content-center align-items-center"><FaEnvelope />Contact</a>
                        </div>
                    </div>
                </div>
                <div className="box col-12 col-md-4 col-lg-3">
                    <div className="card overflow-hidden ">
                        <img className="filter" src={img3} alt="" />
                        <div className="body-card d-flex flex-column gap-2 px-2 py-4 ">
                            <b className="fs-4">John Doe</b>
                            <span className="t-color">CEO & Founder</span>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <a href=""className="btn border btn-dark d-flex gap-2 justify-content-center align-items-center"><FaEnvelope />Contact</a>
                        </div>
                    </div>
                </div>
                <div className="box col-12 col-md-4 col-lg-3">
                    <div className="card overflow-hidden ">
                        <img className="filter" src={img4} alt="" />
                        <div className="body-card d-flex flex-column gap-2 px-2 py-4 ">
                            <b className="fs-4">John Doe</b>
                            <span className="t-color">CEO & Founder</span>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <a href=""className="btn border btn-dark d-flex gap-2 justify-content-center align-items-center"><FaEnvelope />Contact</a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
}