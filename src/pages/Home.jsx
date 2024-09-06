import React from "react"
import image_home from '../assets/banniere3.jpg';
import Introduction from "../components/Introduction"
import DisplayCards from "../components/DisplayCards"
import Convention from "../components/Convention"
import DisplayCollectives from "../components/DisplayCollectives";
import Extras from "../components/Extras"
import '../styles/Home.css'
import DisplayEnds from "../components/DisplayEnds";

export default function Home () {

    return (
        <main className="main-home">
            <div className="banner">
            <img className="banner-img" src={image_home} alt="" />
                <h1 className="banner-title">Le clerc du commissaire de justice</h1>
            </div>
            <Introduction />
            <DisplayCards />
            <Convention />
            <DisplayCollectives />
            <Extras />
            <DisplayEnds />
        </main>
    )
}