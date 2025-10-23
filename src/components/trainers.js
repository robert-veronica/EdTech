// src/components/trainers.js
import React from "react";
import { Link } from "react-router-dom";
import "./section-components/CSS/trainers.css";
import Navbar from "./global-components/navbar-v3";
import FooterV2 from "./global-components/footer-v2";
import trainerData from "./section-components/trainerData";

const Trainers = () => {
    return (
        <>
            <Navbar />
            <div className="mentors-section">
                <h2 className="mentors-title">Meet Our Trainers</h2>
                <p className="mentors-subtitle">Guiding you every step of the way</p>

                <div className="mentors-grid">
                    {trainerData.map((mentor) => (
                        <Link to={`/trainer/${mentor.id}`} key={mentor.id} className="mentor-card">
                            <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                            <h3>{mentor.name}</h3>
                            <p className="mentor-role">{mentor.role}</p>
                            <p className="mentor-expertise">{mentor.expertise}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <FooterV2 />
        </>
    );
};

export default Trainers;
