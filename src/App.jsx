import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/SecAbout";
import { Desing } from "./components/SecDesing";
import { Team } from "./components/SecTeam";
import { Stats } from "./components/SecStats";
import { Work } from "./components/SecWork";
import { Skills } from "./components/SecSkills";
import { Pricing } from "./components/SecPricing";
import { Contact } from "./components/SecContact";
import { Footer } from "./components/Footer";
export default function App() {
    return <>
        <Navbar/>
        <Header/>
        <About/>
        <Desing/>
        <Team/>
        <Stats/>
        <Work/>
        <Skills/>
        <Pricing/>
        <Contact/>
        <Footer/>
    </>
}
