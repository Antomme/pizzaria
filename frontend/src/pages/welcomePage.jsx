import Header from "../components/header"
import { Footer } from "../components/footer"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage(props) {
    const [text, setText] = useState("");
    const navigate = useNavigate();

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
                    {props.isShopOpen ? "We are currently open 🍕" : "We are closed 😔"}
                </p>
                <button onClick={() => navigate("/order")} className="button" disabled={!props.isShopOpen}>
                    Let me pick!
                </button>
            </div>
            <Footer></Footer>
        </div>
    )
}
