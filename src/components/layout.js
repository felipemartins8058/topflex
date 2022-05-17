import React from "react";
import Hero from "./Hero";
import About from "./About";
import Store from "./Store";
import Sale from "./Sale";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Layout =() => {
    return (
        <>
            <Hero />
            <About />
            <Store />
            <Sale />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Layout