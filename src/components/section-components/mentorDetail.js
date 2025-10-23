// src/components/section-components/MentorDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../global-components/navbar-v3";
import FooterV2 from "../global-components/footer-v2";
import "./../section-components/CSS/trainers.css";
import mentorData from "./mentorData";

const MentorDetail = () => {
    const { id } = useParams();
    const trainer = mentorData.find(t => t.id === parseInt(id));

    if (!trainer) {
        return (
            <>
                <Navbar />
                <div style={{ textAlign: "center", padding: "80px" }}>
                    <h2>Mentor not found.</h2>
                    <Link to="/mentors" className="back-btn">← Back to Mentors</Link>
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

                    <Link to="/mentors" className="back-btn">← Back to All Mentors</Link>
                </div>
            </div>
            <FooterV2 />
        </>
    );
};

export default MentorDetail;
