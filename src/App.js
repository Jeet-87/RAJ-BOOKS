import React from "react";
import './App.css';

import {Blog, Features, Footer, Header, Possibility} from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";

const App = () => {
    return(
    <div className="App">
        <div className="gradient__bg">
        <Navbar />
        <Header />
        </div>
        <Brand />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
    );
}

export default App