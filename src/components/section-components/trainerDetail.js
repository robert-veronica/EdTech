// src/components/section-components/trainerDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../global-components/navbar-v3";
import FooterV2 from "../global-components/footer-v2";
import "./../section-components/CSS/trainers.css";
import trainerData from "./trainerData";

const TrainerDetail = () => {
    const { id } = useParams();
    const trainer = trainerData.find(t => t.id === parseInt(id));

    if (!trainer) {
        return (
            <>
                <Navbar />
                <div style={{ textAlign: "center", padding: "80px" }}>
                    <h2>Trainer not found.</h2>
                    <Link to="/trainers" className="back-btn">← Back to Trainers</Link>
                </div>
                <FooterV2 />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="trainer-detail">
                <div className="trainer-detail-card">
                    <img src={trainer.img} alt={trainer.name} className="trainer-detail-img" />
                    <h2>{trainer.name}</h2>
                    <p className="trainer-role">{trainer.role}</p>
                    <p className="trainer-expertise"><strong>Expertise:</strong> {trainer.expertise}</p>

                    <div className="trainer-recognitions">
                        <h3>Coding Recognitions</h3>
                        <ul>
                            {trainer.recognitions.map((rec, i) => (
                                <li key={i}>{rec}</li>
                            ))}
                        </ul>
                    </div>

                    <Link to="/trainers" className="back-btn">← Back to All Trainers</Link>
                </div>
            </div>
            <FooterV2 />
        </>
    );
};

export default TrainerDetail;
