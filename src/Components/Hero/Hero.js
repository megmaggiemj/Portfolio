import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";


const Hero = () => {
    const profilePic = `https://i.imgur.com/UnUfMDH.jpg`

    return(
    <section className="containerHero">
        <p className="hello">Hello World!</p>
    <img className="profilePic" src={ profilePic }/>
    <div className="heroText">This is a photo of meagan</div>
    </section>
    )
}
export default Hero;