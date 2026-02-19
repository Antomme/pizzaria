import Header from "../components/header"
import { Footer } from "../components/footer"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setIsOpen(checkIfOpen());
    }, []);

    useEffect(() => {
        fetch("/about.txt")
            .then((res) => res.text())
            .then((data) => setText(data));
    }, []);

    return (
        <div>
            <Header input="Ristorante Familia Tomme"></Header>
            <div className="container">
                <p className="about-text">
                   {text}
                </p>
                <p>
                    {isOpen ? "We are currently open 🍕" : "We are closed 😔"}
                </p>
                <button onClick={() => navigate("/order")} className="button" disabled={!isOpen}>
                    Let me pick!
                </button>
            </div>
            <Footer></Footer>
        </div>
    )
}

function checkIfOpen() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let openHour, closeHour;

    if (day >= 1 && day <= 5) {
        // Montag-Freitag
        openHour = 11;
        closeHour = 23;
    } else {
        // Samstag-Sonntag
        openHour = 12;
        closeHour = 23;
    }

    const isOpen = hour >= openHour && hour < closeHour;

    return isOpen;
}