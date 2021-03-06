import React from "react";
import Hero from "./Hero";
import About from "./About";
import Store from "./Store";
import Sale from "./Sale";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout =() => {
    return (
        <>
            <Navbar />
            <Hero />
            <Store />
            <Sale />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Layout