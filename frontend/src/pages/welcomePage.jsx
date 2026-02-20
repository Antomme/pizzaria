import Header from "../components/header"
import { Footer } from "../components/footer"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders the landing (welcome) page of the application.
 *
 * Fetches and displays static content from "about.txt",
 * shows the current shop status (open/closed),
 * and provides navigation to the order page.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isShopOpen - Indicates whether the shop is currently open.
 * @returns {JSX.Element} The rendered welcome page.
 */
export default function WelcomePage(props) {
    const [text, setText] = useState("");
    const navigate = useNavigate();

    //fetches the Text from the .txt-file
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
