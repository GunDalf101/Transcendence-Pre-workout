import { useState, useEffect } from "react";
import api from "../api";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

const Home = () => {

    return (
        <main
            className="flex flex-col justify-center items-center min-h-screen text-center space-y-8 p-6">
            <Hero />
            <Features />
        </main>
    );
};

export default Home;
