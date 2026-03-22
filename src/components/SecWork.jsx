import React,{useState} from "react";
import panner1 from "../assets/img/tech_mic.jpg";
import panner2 from "../assets/img/tech_phone.jpg";
import panner3 from "../assets/img/tech_drone.jpg";
import panner4 from "../assets/img/tech_sound.jpg";
import panner5 from "../assets/img/tech_tablet.jpg";
import panner7 from "../assets/img/tech_camera.jpg";
import panner6 from "../assets/img/tech_tableturner.jpg";
import panner8 from "../assets/img/tech_typewriter.jpg";

export function Work(){
    let [Zoom , setZoom] = useState(false)
    function Open(img = null) {
        setZoom(img)
    }
    return <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h2>OUR WORK</h2>
        <p>What we've done for people</p>
        <div className="container row g-3 pt-5">
            <div onClick={()=>Open(panner1)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner1} alt="aaa" />
                </div>
            </div>
            <div onClick={()=>Open(panner2)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner2} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner3)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner3} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner4)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner4} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner5)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner5} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner6)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner6} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner7)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner7} alt="" />
                </div>
            </div>
            <div onClick={()=>Open(panner8)} className="box col-12 col-md-4 col-lg-3">
                <div className="card filter-hov">
                    <img src={panner8} alt="" />
                </div>
            </div>
        </div>
        {Zoom &&(
        <main onClick={()=>Open(null)} className=" vh-100 w-100 bg-dark position-fixed z-3 top-0 start-0 d-flex justify-content-center align-items-center">
            <div className="box text-center">
                <img src={Zoom} alt="" />
            </div>
        </main>)}
    </section>
}