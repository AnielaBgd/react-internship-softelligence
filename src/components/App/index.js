import EpisodesWrapper from '../wrappers/EpisodesWrapper';
import './styles.css';
import Header from "../Includes/Header";
import React from "react";
import Footer from "../Includes/Footer";

const App = () => (
    <>
        <Header/>
        <EpisodesWrapper/>
        <Footer/>
    </>
);

export default App;
