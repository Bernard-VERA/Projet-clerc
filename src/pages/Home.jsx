import React from "react"
import image_home from '../assets/banniere3.jpg';
import '../styles/Home.css'

export default function Home () {

    return (
        <main className="main-home">
            <div className="banner">
            <img className="banner-img" src={image_home} alt="" />
                <h1 className="banner-title">Le clerc du commissaire de justice</h1>
            </div>
        </main>
    )
}