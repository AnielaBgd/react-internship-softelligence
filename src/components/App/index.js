import './styles.css';
import Header from "../Includes/Header";
import React from "react";
import Footer from "../Includes/Footer";
import { Link } from 'react-router-dom';
import Routes from '../../routes';

const App = () => (
    <>
        <Header/>
        <nav>
            <div><Link to="/">Homepage</Link></div>
            <div><Link to="/episodes">Episodes</Link></div>
        </nav>
        <Routes/>
        <Footer/>
    </>
);

export default App;
