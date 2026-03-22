import React from "react";

export function Pricing(){
    return <section className="p-5 bg-dark d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center text-light pt-5">PRICING</h2>
        <p className="text-center text-light pb-5">Choose a pricing plan that fits your needs.</p>
        <div className="container row g-4 ">
            <div className="box text-center col-12 col-md-6 col-lg-4">
                <div className="card border-0 ">
                    <div className="header-card bg-black text-light p-4 fs-2">
                        <b>Basic</b>
                    </div>
                    <p className="border-bottom py-2 fs-5"><span>10GB </span>  Storage</p>
                    <p className="border-bottom py-2 fs-5"><span>10 </span>  Emails</p>
                    <p className="border-bottom py-2 fs-5"><span>10 </span>  Domains</p>
                    <p className="border-bottom py-2 fs-5"><span>Endless </span>  Support</p>
                    <p className="py-2 fs-2">$ 10</p>
                    <p className="py-2 fs-5 t-color">per month</p>
                    <div className="footer bg-sec p-5"><a href="" className="btn btn-dark text-light py-2 px-5">Sing Up</a></div>
                </div>
            </div>
            <div className="box text-center col-12 col-md-6 col-lg-4 transform">
                <div className="card border-0 ">
                    <div className="header-card bg-danger text-light p-4 fs-2">
                        <b>Pro</b>
                    </div>
                    <p className="border-bottom py-2 fs-5"><span>25GB </span>   Storage</p>
                    <p className="border-bottom py-2 fs-5"><span>25 </span>   Emails</p>
                    <p className="border-bottom py-2 fs-5"><span>25 </span>   Domains</p>
                    <p className="border-bottom py-2 fs-5"><span>Endless </span>   Support</p>
                    <p className="py-2 fs-2">$ 25</p>
                    <p className="py-2 fs-5 t-color">per month</p>
                    <div className="footer bg-sec p-5"><a href="" className="btn btn-dark text-light py-2 px-5">Sing Up</a></div>
                </div>
            </div>
            <div className="box text-center col-12 col-md-6 col-lg-4">
                <div className="card border-0 ">
                    <div className="header-card bg-black text-light p-4 fs-2">
                        <b>Premium</b>
                    </div>
                    <p className="border-bottom py-2 fs-5"><span>50GB </span>  Storage</p>
                    <p className="border-bottom py-2 fs-5"><span>50 </span>  Emails</p>
                    <p className="border-bottom py-2 fs-5"><span>50 </span>  Domains</p>
                    <p className="border-bottom py-2 fs-5"><span>Endless </span>  Support</p>
                    <p className="py-2 fs-2">$ 50</p>
                    <p className="py-2 fs-5 t-color">per month</p>
                    <div className="footer bg-sec p-5"><a href="" className="btn btn-dark text-light py-2 px-5">Sing Up</a></div>
                </div>
            </div>
        </div>
    </section>
}