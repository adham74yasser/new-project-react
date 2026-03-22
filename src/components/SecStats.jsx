import React from "react";

export function Stats(){
    return <section className="py-5 w-100 d-flex justify-content-center bg-stats ">
        <div className="container row">
            <div className="box col-12 col-md-3 text-light text-center">
                <b className="fs-1">14+</b>
                <p className="fs-4">Partners</p>
            </div>
            <div className="box col-12 col-md-3 text-light text-center">
                <b className="fs-1">55+</b>
                <p className="fs-4">Projects Done</p>
            </div>
            <div className="box col-12 col-md-3 text-light text-center">
                <b className="fs-1">89+</b>
                <p className="fs-4">Happy Clients</p>
            </div>
            <div className="box col-12 col-md-3 text-light text-center">
                <b className="fs-1">150+</b>
                <p className="fs-4">Meetings</p>
            </div>
        </div>
    </section>
}