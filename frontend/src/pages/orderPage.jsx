import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Menu from "../components/menu";
import { Footer } from "../components/footer";

/**
 * Renders the order page where users can select pizzas and quantities.
 *
 * This component manages order updates via the provided setOrder function.
 * When a pizza amount changes, the order state is updated using the pizza
 * name as key and storing both amount and price.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.order - Current order state keyed by pizza name.
 * @param {Function} props.setOrder - State setter function for updating the order.
 * @returns {JSX.Element} The rendered order page.
 */
export default function OrderPage({ order, setOrder }) {
    const navigate = useNavigate();

   /**
     * Updates the order state when a pizza quantity changes.
     *
     * Creates or updates an entry in the order object using
     * the pizza name as key and storing an object containing
     * the selected amount and unit price.
     *
     * @param {string} pizzaName - Name of the pizza.
     * @param {number} amount - Selected quantity.
     * @param {number} price - Price per unit.
     */    const handleAmountChange = (pizzaName, amount, price) => {
        setOrder(prev => ({
            ...prev,
            [pizzaName]: {amount, price}
        }));
    };

    const handleSubmit = () => {
        navigate("/summary");
    };

    return (
        <div>
            <Header input="Order Now!" />
            <div className="container">
                <Menu
                    showAmount={true}
                    order={order}
                    onAmountChange={handleAmountChange} // <-- weitergeben
                />
                <button onClick={handleSubmit}>Order!</button>
            </div>
            <Footer />
        </div>
    );
}
