import React from "react";
import "./section-components/CSS/trainers.css";
import NavbarV3 from "./global-components/navbar-v3";
import Footer_v2 from "./global-components/footer-v2";

const mentorsData = [
    { id: 1, name: "Ananya Rao", role: "MERN Trainer", expertise: "React, Node.js", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "Rohit Mehta", role: "Flutter Mentor", expertise: "Dart, UI Design", img: "https://i.pravatar.cc/150?img=12" },
    { id: 3, name: "Priya Singh", role: "Data Science Lead", expertise: "Python, Pandas, ML", img: "https://i.pravatar.cc/150?img=13" },
    { id: 4, name: "Vikram Patel", role: "ML Expert", expertise: "TensorFlow, PyTorch", img: "https://i.pravatar.cc/150?img=14" },
    { id: 5, name: "Sana Kapoor", role: "Frontend Mentor", expertise: "HTML, CSS, JS", img: "https://i.pravatar.cc/150?img=15" },
    { id: 6, name: "Arjun Das", role: "Backend Specialist", expertise: "Express, MongoDB", img: "https://i.pravatar.cc/150?img=16" },
    { id: 7, name: "Nisha Verma", role: "Career Coach", expertise: "Interview Prep", img: "https://i.pravatar.cc/150?img=17" },
    { id: 8, name: "Deepak Sharma", role: "DevOps Mentor", expertise: "Docker, CI/CD", img: "https://i.pravatar.cc/150?img=18" },
    { id: 9, name: "Meera Joshi", role: "UI/UX Mentor", expertise: "Figma, Prototyping", img: "https://i.pravatar.cc/150?img=19" },
    { id: 10, name: "Karan Gupta", role: "Project Guide", expertise: "Agile, PM", img: "https://i.pravatar.cc/150?img=20" }
];

const Mentors = () => {
    return (
        <>
            <NavbarV3 />
            <div className="mentors-section">
                <h2 className="mentors-title">Meet Our Mentors</h2>
                <p className="mentors-subtitle">Guiding you every step of the way</p>

                <div className="mentors-grid">
                    {mentorsData.map((mentor) => (
                        <div className="mentor-card" key={mentor.id}>
                            <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                            <h3>{mentor.name}</h3>
                            <p className="mentor-role">{mentor.role}</p>
                            <p className="mentor-expertise">{mentor.expertise}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer_v2 />
        </>
    );
};

export default Mentors;
